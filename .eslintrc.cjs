module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react-hooks/recommended"],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "simple-import-sort"],
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          ["^node:"],
          // Packages. `react` related packages come first.
          ["^@?\\w"],
          // Absolute imports and other imports such as Vue-style `@/foo`
          // Anything that does not start with a dot.
          ["^@app"],
          ["^@core"],
          ["^@features"],
          ["^@pages"],
          ["^@shared"],
          // Anything that starts with a dot.
          ["^\\./", "^\\.\\./"],
        ],
      },
    ],
  },
};
