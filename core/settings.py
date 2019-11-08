import sublime

from . import aliases
from . import icons
from . import themes

from .utils.logging import log, dump
from .utils.overlay import with_ignored_overlay
from .utils.path import PACKAGE_NAME

PACKAGE_SETTINGS = "Meetio Theme Icons.sublime-settings"

_cached_settings = {}
_uuid = "9ebcce78-4cac-4089-8bd7-d551c634b052"


def add_listener():
    log("Initializing settings")
    path = "Packages/{0}/.sublime/{1}".format(PACKAGE_NAME, PACKAGE_SETTINGS)
    settings = sublime.load_settings(PACKAGE_SETTINGS)
    for key in sublime.decode_value(sublime.load_resource(path)).keys():
        if key not in ("dev_mode", "dev_trace"):
            _cached_settings[key] = settings.get(key)

    icons.init()
    themes.patch(_cached_settings)
    aliases.check(_cached_settings["aliases"])
    sublime.load_settings(PACKAGE_SETTINGS).add_on_change(_uuid, _on_change)


def clear_listener():
    sublime.load_settings(PACKAGE_SETTINGS).clear_on_change(_uuid)


def _on_change():
    is_aliases_changed = False
    is_icons_changed = False
    is_force_mode_changed = False

    settings = sublime.load_settings(PACKAGE_SETTINGS)

    for key, value in _cached_settings.items():
        new_value = settings.get(key)
        if value != new_value:
            _cached_settings[key] = new_value
            if key == "aliases":
                is_aliases_changed = True
            elif key == "force_mode":
                is_force_mode_changed = True
            else:
                is_icons_changed = True

    if is_aliases_changed:
        log("Aliases settings changed")
        aliases.check(_cached_settings["aliases"])
    if is_icons_changed:
        log("Icons settings changed")
        _patch_theme(True)
    elif is_force_mode_changed:
        log("Force mode settings changed")
        _patch_theme(False)


@with_ignored_overlay
def _patch_theme(overwrite):
    themes.patch(_cached_settings, overwrite)
