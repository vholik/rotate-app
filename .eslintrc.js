module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "plugin:react/recommended",
        "standard-with-typescript",
        "plugin:@shopify/typescript",
        "plugin:@shopify/react",
        "plugin:@shopify/prettier",
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["./tsconfig.json"],
    },
    plugins: ["react"],
    rules: {
        "import/no-extraneous-dependencies": [0],
        "@typescript-eslint/prefer-nullish-coalescing": [0],
        "@shopify/typescript/prefer-pascal-case-enums": [0],
        "react/react-in-jsx-scope": [0],
        "no-tabs": 0,
        "@shopify/jsx-no-hardcoded-content": "off",
        "no-unused-vars": "warn",
        "react/jsx-indent": [2,4],
        indent: [2, 4],
        "prettier/prettier": "off",
        "@shopify/typescript/prefer-singular-enums": "off",
        "@typescript-eslint/naming-convention": "off",
        "import/no-anonymous-default-export": "off",
        "@shopify/prefer-module-scope-constants": "off"
    },
};
