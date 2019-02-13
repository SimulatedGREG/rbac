module.exports = {
  env: {
    es6: true,
    'jest/globals': true,
    node: true,
  },
  extends: ['eslint:recommended', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['import', 'jest'],
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'import/no-cycle': 'off',
    'import/prefer-default-export': 'off',
    'no-console': 'off',
  },
};
