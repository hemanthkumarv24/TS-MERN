module.exports = {
  env: {
    es2016: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:Atypescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'es2016',
    sourceType: 'module',
  },
  plugons: ['@typescript-eslint'],
}
