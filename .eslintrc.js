module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'plugin:@shopify/typescript',
        'plugin:@shopify/react',
        'plugin:@shopify/prettier',
        'plugin:i18next/recommended',
        'prettier',
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        project: ['./tsconfig.json'],
    },
    plugins: ['react', 'i18next', 'prettier', 'react-hooks'],
    rules: {
        'import/no-extraneous-dependencies': [0],
        '@typescript-eslint/prefer-nullish-coalescing': [0],
        '@shopify/typescript/prefer-pascal-case-enums': [0],
        'react/react-in-jsx-scope': [0],
        'no-tabs': 0,
        '@shopify/jsx-no-hardcoded-content': 'off',
        'no-unused-vars': 'warn',
        'react/jsx-indent': [2, 4],
        indent: [2, 4],
        'prettier/prettier': 'off',
        '@shopify/typescript/prefer-singular-enums': 'off',
        '@typescript-eslint/naming-convention': 'off',
        'import/no-anonymous-default-export': 'off',
        '@shopify/prefer-module-scope-constants': 'off',
        'i18next/no-literal-string': ['error', { markupOnly: true }],
        'no-console': 'warn',
        '@typescript-eslint/member-ordering': 'off',
        'react/state-in-constructor': 'off',
        'react/self-closing-comp': 'off',
        '@shopify/strict-component-boundaries': 'off',
        'react/display-name': 'off',
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@shopify/jsx-no-complex-expressions': 'off',
        '@typescript-eslint/consistent-indexed-object-style': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
    },
}
