module.exports = {
  env: {
    node: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
  overrides: [
    {
      env: {
        browser: true,
        commonjs: true,
        es2021: true,
      },
      files: ['index.js', './src/**/*'],
      parserOptions: {
        sourceType: 'module',
      },
    },
  ],
};
