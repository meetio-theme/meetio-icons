import pc from 'picocolors';

const ICONS = {
  scan: '🔍',
  found: '📄',
  read: '📥',
  render: '🎨',
  write: '💾',
  done: '🏁',
  warn: '⚠️',
};

/**
 * Simple logging utilities with emoji + colored output.
 *
 * Each method prefixes messages with a visual icon and colors
 * the output using picocolors.
 *
 * Usage:
 * ```ts
 * log.scan('Scanning folder...');
 * log.warn('Something went wrong');
 * ```
 */
export const log = {
  /** Logs an informational scanning message (cyan) */
  scan: (msg: string) => console.log(pc.cyan(`${ICONS.scan}  ${msg}`)),
  /** Logs a found item message (blue) */
  found: (msg: string) => console.log(pc.blue(`${ICONS.found}  ${msg}`)),
  /** Logs a reading/loading message (magenta) */
  read: (msg: string) => console.log(pc.magenta(`${ICONS.read}  ${msg}`)),
  /** Logs a render/generation message (yellow) */
  render: (msg: string) => console.log(pc.yellow(`${ICONS.render}  ${msg}`)),
  /** Logs a write/disk output message (green) */
  write: (msg: string) => console.log(pc.green(`${ICONS.write}  ${msg}`)),
  /** Logs a "done" message in bold green */
  done: (msg: string) => console.log(pc.bold(pc.green(`${ICONS.done}  ${msg}`))),
  /** Logs a warning message (red) */
  warn: (msg: string) => console.warn(pc.red(`${ICONS.warn}  ${msg}`)),
};
