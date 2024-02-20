/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@0xdbe/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
