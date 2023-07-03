module.exports = {
  overrides: [
    {
      env: {
        es6: true,
        browser: true,
        node: true,
      },
      files: ["*.js", "*.jsx", "*.ts", "*.tsx", "*.mts", "*.mjs"],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      plugins: ["@typescript-eslint"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  ],
};
