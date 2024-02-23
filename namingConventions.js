const defaultOptions = [
  {
    selector: "default",
    format: ["strictCamelCase"],
    leadingUnderscore: "allow",
    trailingUnderscore: "allow",
  },
  {
    selector: "import",
    format: ["camelCase", "PascalCase"],
  },
  {
    selector: "variable",
    format: ["strictCamelCase", "UPPER_CASE"],
    leadingUnderscore: "forbid",
    trailingUnderscore: "forbid",
  },
  {
    selector: "typeLike",
    format: ["StrictPascalCase"],
  },
];

module.exports = defaultOptions;
