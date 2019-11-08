import json
import os
import shutil

import sublime

from .utils import path
from .utils.colors import convert_color_value
from .utils.logging import log, dump

from . import icons


def patch(settings, overwrite=False):
    theme_packages = _installed_themes()
    supported = [] if settings.get("force_mode") else _customizable_themes()

    general_patch = _create_general_patch(settings)
    specific_patch = _create_specific_patch(settings)

    general = path.overlay_patches_general_path()
    specific = path.overlay_patches_specific_path()

    color = "single" if settings.get("color") else "multi"
    general_dest = os.path.join(general, color)

    patched = set()

    log("Patching themes")
    for package, themes in theme_packages.items():
        if package in supported:
            icons.copy_missing(general, specific, package)
            patched.update(_patch_themes(
                themes, os.path.join(specific, package, color),
                specific_patch, overwrite))
        else:
            patched.update(_patch_themes(
                themes, general_dest, general_patch, overwrite))

    log("Removing obsolete theme patches")
    for dirpath, dirnames, filenames in os.walk(path.overlay_patches_path()):
        if dirpath == specific:
            for filepath in set(dirnames) - set(supported):
                filepath = os.path.join(dirpath, filepath)
                shutil.rmtree(filepath, ignore_errors=True)
                dump(filepath)

        for filename in filenames:
            if filename.endswith(".sublime-theme"):
                filepath = os.path.join(dirpath, filename)
                if filepath not in patched:
                    try:
                        os.remove(filepath)
                        dump(filepath)
                    except OSError:
                        pass


def _customizable_themes():
    log("Getting the list of theme packages with customization support")

    customizable = set()
    for res in _find_package_resources(".supports-a-file-icon-customization"):
        try:
            _, package, _ = res.split("/")
        except ValueError:
            pass
        else:
            customizable.add(package)

    dump(customizable)
    return customizable


def _installed_themes():
    log("Getting installed themes")

    found_themes = set()
    theme_packages = {}

    for res in _find_package_resources("*.sublime-theme"):
        _, package, *_, theme = res.split("/")
        if package != path.OVERLAY_ROOT:
            if theme not in found_themes:
                found_themes.add(theme)
                theme_packages.setdefault(package, []).append(theme)

    dump(theme_packages)
    return theme_packages


def _find_package_resources(pattern):
    return (resource for resource in sublime.find_resources(pattern)
            if resource.startswith("Packages/"))


def _patch_themes(themes, dest, text, overwrite):
    patched = set()
    mode = "w" if overwrite else "x"
    for theme in themes:
        try:
            filename = os.path.join(dest, theme)
            patched.add(filename)
            with open(filename, mode) as t:
                t.write(text)
        except FileExistsError:
            log("Ignored `{}`".format(theme))
        except Exception as error:
            log("Error patching `{}`".format(theme))
            dump(error)
        else:
            log("Patched `{}`".format(theme))
    return patched


def _create_general_patch(settings):
    log("Preparing general patch")
    theme_content = []

    color = convert_color_value(settings.get("color"))
    opacity = settings.get("opacity")
    size = settings.get("size")
    row_padding = settings.get("row_padding")
    if color or opacity or size or row_padding:
        icon = _patch_icon(None, color, opacity)
        if size:
            icon["content_margin"] = [size, size]
        if row_padding:
            icon["row_padding"] = row_padding
        theme_content.append(icon)

    color = convert_color_value(settings.get("color_on_hover"))
    opacity = settings.get("opacity_on_hover")
    if color or opacity:
        theme_content.append(_patch_icon("hover", color, opacity))

    color = convert_color_value(settings.get("color_on_select"))
    opacity = settings.get("opacity_on_select")
    if color or opacity:
        theme_content.append(_patch_icon("selected", color, opacity))

    dump(theme_content)
    return json.dumps(theme_content)


def _create_specific_patch(settings):
    log("Preparing specific patch")
    theme_content = []

    color = convert_color_value(settings.get("color"))
    if color:
        theme_content.append(_patch_icon(None, color))

        color_on_hover = convert_color_value(settings.get("color_on_hover"))
        if color_on_hover:
            theme_content.append(_patch_icon("hover", color_on_hover))

        color_on_select = convert_color_value(settings.get("color_on_select"))
        if color_on_select:
            theme_content.append(_patch_icon("selected", color_on_select))

    dump(theme_content)
    return json.dumps(theme_content)


def _patch_icon(attrib, color=None, opacity=None):
    icon = {"class": "icon_file_type"}
    if attrib:
        icon["parents"] = [{"class": "tree_row", "attributes": [attrib]}]
    if color:
        icon["layer0.tint"] = color
    if opacity:
        icon["layer0.opacity"] = opacity
    return icon
