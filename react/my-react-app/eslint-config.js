module.exports = {
    root: true,
    env: {
      browser: true,
      es2021: true,
      node: true
    },
    extends: [
      'standard',
      'plugin:react/recommended'
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true
      }
    },
    plugins: [
      'react',
      'react-hooks'
    ],
    rules: {
      'react/jsx-fragments':'off',
      'react/jsx-no-useless-fragments':'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off', 
      'react/jsx-uses-react':'off',
      'no-console':'warn',
      'no-unused-vars': 'warn',
      'semi': ['error', 'always']
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  };
  