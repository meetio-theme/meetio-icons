module.exports = {
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: "module"
    },
    env: {
        browser: true,
        es6: true,
    },
    parser:"babel-eslint",
    extends: ["eslint:recommended", "prettier"],
    plugins: ["prettier"],
    rules: {
        "prettier/prettier": [
        "error",
        {
            singleQuote: false,
        },
        ],
        "no-console": "off",
    },
}
