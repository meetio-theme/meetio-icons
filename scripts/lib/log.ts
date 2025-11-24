import pc from 'picocolors';

// lil glyphs for log “flavor”
const ICONS = {
    scan: '🔍',
    found: '📄',
    read: '📥',
    render: '🎨',
    write: '💾',
    done: '🏁',
    warn: '⚠️',
};

export const log = {
    scan: (msg: string) => console.log(pc.cyan(`${ICONS.scan}  ${msg}`)),
    found: (msg: string) => console.log(pc.blue(`${ICONS.found}  ${msg}`)),
    read: (msg: string) => console.log(pc.magenta(`${ICONS.read}  ${msg}`)),
    render: (msg: string) => console.log(pc.yellow(`${ICONS.render}  ${msg}`)),
    write: (msg: string) => console.log(pc.green(`${ICONS.write}  ${msg}`)),
    done: (msg: string) =>
        console.log(pc.bold(pc.green(`${ICONS.done}  ${msg}`))),
    warn: (msg: string) => console.warn(pc.red(`${ICONS.warn}  ${msg}`)),
};
