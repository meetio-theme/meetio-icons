/*eslint-disable no-undef */
const path = require("path");
const fs = require("fs");
const SVGO = require("svgo");

const svgo = new SVGO({
    plugins: [
        {
            cleanupAttrs: true
        },
        {
            removeDoctype: true
        },
        {
            removeXMLProcInst: true
        },
        {
            removeComments: true
        },
        {
            removeMetadata: true
        },
        {
            removeTitle: true
        },
        {
            removeDesc: true
        },
        {
            removeUselessDefs: true
        },
        {
            removeEditorsNSData: true
        },
        {
            removeEmptyAttrs: true
        },
        {
            removeHiddenElems: true
        },
        {
            removeEmptyText: true
        },
        {
            removeEmptyContainers: true
        },
        {
            removeViewBox: false
        },
        {
            cleanupEnableBackground: true
        },
        {
            convertStyleToAttrs: true
        },
        {
            convertColors: true
        },
        {
            convertPathData: true
        },
        {
            convertTransform: true
        },
        {
            removeUnknownsAndDefaults: true
        },
        {
            removeNonInheritableGroupAttrs: true
        },
        {
            removeUselessStrokeAndFill: true
        },
        {
            removeUnusedNS: true
        },
        {
            cleanupIDs: true
        },
        {
            cleanupNumericValues: true
        },
        {
            moveElemsAttrsToGroup: true
        },
        {
            moveGroupAttrsToElems: true
        },
        {
            collapseGroups: true
        },
        {
            removeRasterImages: false
        },
        {
            mergePaths: true
        },
        {
            convertShapeToPath: true
        },
        {
            sortAttrs: true
        },
        {
            removeDimensions: true
        }
    ]
});

fs.readdirSync("./src/svg/").forEach(icon => {
    const filepath = path.join(__dirname, `/../src/svg/${icon}`);
    fs.readFile(filepath, "utf8", (err, data) => {
        if (err) throw err;
        svgo.optimize(data, { path: filepath }).then(function(result) {
            fs.writeFileSync(result.path,
                result.data,
                err => {
                    if (err) {
                        console.log(err);
                    }
                }
            );
        });
    });
});
