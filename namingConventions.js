const defaultOptions = [
  {
    selector: "default",
    format: ["strictCamelCase"],
    leadingUnderscore: "forbid",
    trailingUnderscore: "forbid",
  },
  {
    selector: [
      "import",
      "typeParameter",
      "typeProperty",
      "objectLiteralProperty",
    ],
    format: null,
    leadingUnderscore: "allow",
    trailingUnderscore: "allow",
  },
  {
    selector: "variable",
    format: ["strictCamelCase", "UPPER_CASE"],
    leadingUnderscore: "allow",
    trailingUnderscore: "forbid",
  },
  {
    selector: ["class", "enum", "interface", "typeAlias"],
    format: ["StrictPascalCase"],
    leadingUnderscore: "forbid",
    trailingUnderscore: "forbid",
  },
];

module.exports = defaultOptions;
