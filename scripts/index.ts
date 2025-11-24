import * as path from 'path';
import * as fs from 'fs/promises';
import { Resvg } from '@resvg/resvg-js';
import defaultOptions from './defaultOptions';
import { log } from './lib/log';

export interface IOptions {
    /** Target output size in px */
    size: number;
    /** Suffix appended to the output filename, or false for none */
    suffix: string | boolean;
}

export interface ISettings {
    /** Destination folder where generated icons will be written */
    distFolder: string;
    /** Optional override-options for each output size */
    options?: IOptions | {};
}
/**
 * Convert all SVGs in `./svg` into PNGs of multiple sizes.
 *
 * @param settings Controls output folder + optional size overrides.
 */
export default async function buildIconsType(
    settings: ISettings = { distFolder: 'icons', options: {} }
) {
    const { distFolder, options = {} } = settings;

    // Merge provided options with defaults — afaict this code
    // intended “array of sizes” but is instead merging objects,
    // so double-check that upstream.
    const sizes: IOptions[] = { ...options, ...defaultOptions } as any;

    // Local SVG source folder (sits next to this file).
    const svgSrc = path.join(__dirname, '../icons');

    log.scan(`Scanning: ${svgSrc}`);

    // Ensure dest folder exists once — not per icon, not per size.
    await fs.mkdir(distFolder, { recursive: true });

    // Read SVG filenames.
    const files = await fs.readdir(svgSrc);

    if (files.length === 0) {
        log.warn('No SVG icons found.');
        return;
    }

    // Aggregate all async tasks: reading + rendering + writing.
    const tasks: Promise<any>[] = [];

    for (const file of files) {
        log.found(`Found: ${file}`);

        const filePath = path.join(svgSrc, file);
        const baseName = file.replace(/\.[^.]+$/, '');

        // Read SVG content (one-time).
        const svgTask = fs.readFile(filePath, 'utf8').then(async (text) => {
            log.read(`Reading: ${file}`);

            // Convert text → buffer
            const svgBuffer = Buffer.from(text);

            // For each defined size, render PNG + write to disk.
            for (const [key, setting] of Object.entries(sizes)) {
                tasks.push(
                    (async () => {
                        log.render(
                            `Render ${baseName} @ ${setting.size}px (id: ${key}, suffix: ${
                                setting.suffix || 'none'
                            })`
                        );

                        // Instantiate resvg once per SVG
                        const baseResvg = new Resvg(svgBuffer, {
                            fitTo: { mode: 'width', value: setting.size },
                        });
                        const png = baseResvg.render().asPng();

                        const filename = `${baseName}${
                            setting.suffix ? setting.suffix : ''
                        }.png`;

                        const outPath = path.join(distFolder, filename);

                        await fs.writeFile(outPath, png);

                        log.write(`Wrote: ${outPath}`);
                    })()
                );
            }
        });

        // Push the read-op task to the global pool.
        tasks.push(svgTask);
    }

    // Wait for all read→render→write tasks to finish.
    await Promise.all(tasks);

    log.done('All icons rendered.');
}
