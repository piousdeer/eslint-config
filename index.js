const rules = require('./rules.json')

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],

  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  env: {
    es6: true,
    node: true,
    browser: true
  },

  rules
}
