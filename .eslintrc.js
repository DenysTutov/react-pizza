// module.exports = {
//   env: {
//     commonjs: true,
//     es2021: true,
//     node: true,
//     jest: true,
//   },
//   extends: ['standard', 'prettier'],
//   parserOptions: {
//     ecmaVersion: 12,
//   },
//   rules: {},
// };

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'standard',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
  },
};
