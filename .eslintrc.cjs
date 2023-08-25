module.exports = {
  extends: ['plugin:vue/vue3-essential'],
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  plugins: ['vue'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {},
};
