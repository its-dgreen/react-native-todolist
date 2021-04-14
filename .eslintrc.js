module.exports = {
  extends: [
    `react-app`,
    `eslint:recommended`,
    `plugin:react/recommended`,
    `plugin:prettier/recommended`,
  ],
  plugins: [`react`, `react-native`, `prettier`, `standard`],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    node: true,
    es6: true,
  },
};
