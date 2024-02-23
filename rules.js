const defaultOptions = require("./namingConventions");

module.exports = {
  rules: {
    "@typescript-eslint/ban-ts-comment": "error", // no overriding rules
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/explicit-module-boundary-types": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/restrict-template-expressions": "error",
    "no-console": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "prefer-template": "error",
    "no-param-reassign": "error",
    "@typescript-eslint/naming-convention": [
      "error",
      ...defaultOptions.map((option) => ({
        selector: option.selector,
        format: option.format,
        leadingUnderscore: option.leadingUnderscore,
        trailingUnderscore: option.trailingUnderscore,
      })),
    ],
  },
};
