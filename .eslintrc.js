module.exports = {
  globals: {
    fetch: false,
    __DEV__: true,
  },
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'simple-import-sort'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-empty-function': 'off',
    'no-empty': 'off',
    '@typescript-eslint/no-empty-function': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^(react)', '^@?\\w'],
          ['^(@components)(/.*|$)'],
          ['^(@pages)(/.*|$)'],
          ['^(@hooks)(/.*|$)'],
          ['^(@config)(/.*|$)'],
          ['^(@interfaces)(/.*|$)'],
          ['^(@providers)(/.*|$)'],
          ['^(@store)(/.*|$)'],
          ['^(@__mocks__)(/.*|$)'],
          ['^\\u0000'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        ],
      },
    ],
  },
};
