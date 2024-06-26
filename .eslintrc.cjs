module.exports = {
    root: true,
    env: {browser: true, es2020: true},
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:react/jsx-runtime',
        'eslint-config-prettier'
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname,
    },
    plugins: ['react-refresh'],
    rules: {
        "@typescript-eslint/consistent-type-imports": "error",
        'react-refresh/only-export-components': [
            'warn',
            {allowConstantExport: true},
        ],
    },
    settings: {
        react: {
            "version": "detect",
        }
    }
}
