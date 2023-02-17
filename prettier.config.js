module.exports = {
  arrowParens: "avoid",
  bracketSameLine: true,
  bracketSpacing: true,
  singleQuote: true,
  trailingComma: "es5",
  semi: true,
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrder: [
    "^react$",
    "^next/(.*)$",
    "<THIRD_PARTY_MODULES>",
    "^@components/(.*)$",
    "^@constants/(.*)$",
    "^@styles/(.*)$",
    "^[./]",
  ],
};
