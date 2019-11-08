from functools import partial

import sublime

from .path import OVERLAY_ROOT


def with_ignored_overlay(fun):

    def decorator(*args, **kwargs):
        prefs = sublime.load_settings("Preferences.sublime-settings")
        ignored = prefs.get("ignored_packages", [])
        if OVERLAY_ROOT not in ignored:
            prefs.set("ignored_packages", ignored + [OVERLAY_ROOT])
        else:
            ignored.remove(OVERLAY_ROOT)

        try:
            fun(*args, **kwargs)
        finally:
            prefs.set("ignored_packages", ignored)

    return decorator
