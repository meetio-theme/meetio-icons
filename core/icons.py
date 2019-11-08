import json
import os
import shutil
import zipfile

import sublime

from .utils import path
from .utils.logging import log, dump


def init():
    log("Initializing icons")

    try:
        general_path = path.overlay_patches_general_path()
        if os.path.isdir(general_path):
            dump("All the necessary icons are provided")
        else:
            _init_overlay(general_path)
    except Exception as error:
        log("Error during copy")
        dump(error)


def _init_overlay(dest):
    """Create the icon overlay package.

    In order to make sure to override existing icons provided by the themes
    icons need to be copied to a package, which is loaded as late as possible.

    This function therefore creates a package named `@@ Meetio Theme Icons @@` and
    copies all icons over there.
    """
    # copy icons from the loosen package folder
    src = path.package_icons_path()
    _copy_general(src, dest, "multi")
    _copy_general(src, dest, "single")

    # extract remaining icons from the package archive
    try:
        with zipfile.ZipFile(path.installed_package_path()) as z:
            for m in z.namelist():
                if m.startswith("icons/multi") or m.startswith("icons/single"):
                    _, color, name = m.split("/")
                    try:
                        with open(os.path.join(dest, color, name), "xb") as f:
                            f.write(z.read(m))
                    except FileExistsError:
                        pass
    except FileNotFoundError:
        pass


def copy_missing(source, overlay, package):
    log("Checking icons for {}...".format(package))

    try:
        missing_icons = _get_missing(package)
        if missing_icons:
            _copy_missing(source, overlay, package, "multi", missing_icons)
            _copy_missing(source, overlay, package, "single", missing_icons)
        return bool(missing_icons)
    except OSError as error:
        log("Error during copy")
        dump(error)
    return False


def _copy_general(source, overlay, color):
    dest = os.path.join(overlay, color)
    try:
        shutil.copytree(os.path.join(source, color), dest)
    except FileNotFoundError:
        os.makedirs(dest, exist_ok=True)
    except OSError as error:
        log("Error during copy")
        dump(error)


def _copy_missing(source, overlay, package, color, icons):
    src = os.path.join(source, color)
    dest = path.makedirs(overlay, package, color)
    suffixes = (".png", "@2x.png", "@3x.png")
    for icon in icons:
        for suffix in suffixes:
            _copy(src, dest, icon + suffix)


def _copy(src, dest, icon):
    try:
        with open(os.path.join(dest, icon), "xb") as df:
            with open(os.path.join(src, icon), "rb") as sf:
                df.write(sf.read())
    except FileExistsError:
        pass


def _get_missing(package):
    package_icons = icons_json_content()
    theme_icons_path = _icons_path(package)
    if not theme_icons_path:
        return package_icons

    theme_icons = {
        os.path.basename(os.path.splitext(i)[0])
        for i in sublime.find_resources("*.png")
        if i.startswith(theme_icons_path)
    }

    return [icon for icon in package_icons if icon not in theme_icons]


def _icons_path(package):
    package_path = "Packages/" + package
    for res in sublime.find_resources("file_type_default.png"):
        if res.startswith(package_path):
            return os.path.dirname(res)
    return False


def icons_json_content():
    return json.loads(sublime.load_resource(
        "Packages/" + path.PACKAGE_NAME + "/icons/icons.json"))
