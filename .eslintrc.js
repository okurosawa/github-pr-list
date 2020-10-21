module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/prettier',
    '@vue/typescript'
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-var": "error",
    "prefer-const": "error",
    "object-shorthand": "error",
    "prefer-arrow-callback": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_"
      }
    ],
    'prettier/prettier': [
      'error',
      {
        'singleQuote': true,
        'semi': false
      }
    ]
  }
};
