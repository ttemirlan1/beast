module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'airbnb-base/legacy',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-underscore-dangle': ['off', { allow: ['id'] }]
  }
};
