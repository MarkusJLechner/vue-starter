module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },

  // extends: ['plugin:vue/vue3-essential', 'prettier'],

  extends: [
    'plugin:vue/recommended',
    '@vue/prettier',
    'plugin:prettier/recommended',
  ],

  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 12,
    requireConfigFile: false,
    sourceType: 'module',
  },

  rules: {
    // 'vue/no-unused-vars': 'error',
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'prettier/prettier': ['error'],
    'vue/no-multiple-template-root': 'off',
  },
}
