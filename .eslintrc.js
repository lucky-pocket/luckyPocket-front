module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      'sort-imports': [
        'error',
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          allowSeparatedGroups: true,
        },
      ],
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          groups: ['builtin', ['external', 'type'], 'internal'],

          pathGroups: [
            {
              pattern: 'next',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'next/**',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'components',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: 'shared/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: 'utils/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: 'types/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: 'styles/**',
              group: 'internal',
              position: 'after',
            },
          ],

          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
};
