module.exports = {
  env: {
    browser: false,
    node: true,
  },
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  extends: ["prettier", "standard-with-typescript"],
  rules: {},
  extends: [
    "plugin:react/recommended",
    "standard-with-typescript",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "prettier": "error",
    "class-methods-use-this": "off",
    "@typescript-eslint/camelcase": "off",
    "no-useless-constructor": "off",
    "object-curly-spacing": ["error", "always"],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "_",
      },
    ],
    "@typescript-eslint/interface-name-prefix": [
      "error",
      {
        prefixWithI: "always",
      },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
      },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
