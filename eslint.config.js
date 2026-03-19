/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "commonjs",
      globals: {
        module: "readonly",
        require: "readonly",
        console: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "warn"
    }
  },
  {
    files: ["**/*.test.js"],
    languageOptions: {
      globals: {
        describe: "readonly",
        test: "readonly",
        expect: "readonly"
      }
    }
  }
];