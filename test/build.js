/*eslint-disable no-undef */
const rimraf = require("rimraf")
const build = require("../src/index.js")

rimraf('icons', () => {
    build.run()
});
