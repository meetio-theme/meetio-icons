import * as path from 'path';
import * as fs from 'fs';
import svg2img from 'svg2img';
import defaultOptions from './defaultOptions';

export interface IOptions {
    size: number;
    suffix: string | boolean;
}

export interface ISettings {
    distFolder: string;
    options?: IOptions | {};
}

export default function buildIconsType(
    settings: ISettings = { distFolder: 'icons', options: {} }
) {
    const { distFolder, options } = settings;
    const sizes: IOptions[] = { ...options, ...defaultOptions };

    const svgSrc = path.join(__dirname, `/svg/`);
    fs.readdirSync(svgSrc).forEach((icon: string) => {
        const iconPath = path.join(__dirname, `/svg/${icon}`);
        icon = icon
            .split('.')
            .slice(0, -1)
            .join('.');
        fs.readFile(iconPath, 'utf8', (err, data: any) => {
            if (err) throw err;
            data = Buffer.from(data, 'utf8');
            Object.values(sizes).forEach((setting: IOptions) => {
                svg2img(
                    data,
                    { width: setting.size, height: setting.size },
                    (_: any, buffer: Buffer) => {
                        fs.mkdir(distFolder, () => {
                            fs.writeFileSync(
                                `${distFolder}/${
                                    setting.suffix
                                        ? icon + setting.suffix
                                        : icon
                                }.png`,
                                buffer
                            );
                        });
                    }
                );
            });
        });
    });
}
