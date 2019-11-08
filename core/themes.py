import json
import os
import shutil

import sublime

from .utils import path
from .utils.logging import log, dump

from . import icons


def patch(settings, overwrite=False):
    theme_packages = _installed_themes()
    supported = [] if settings.get("force_mode") else _customizable_themes()

    general = path.overlay_patches_general_path()
    specific = path.overlay_patches_specific_path()

    patched = set()

    log("Patching themes")
    for package, themes in theme_packages.items():
        if package in supported:
            icons.copy_missing(general, specific, package)
            patched.update(_patch_themes(
                themes, os.path.join(specific, package), overwrite))
        else:
            patched.update(_patch_themes(
                themes, overwrite))

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
