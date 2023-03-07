require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  env: {
    es2021: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    // Add under other rules
    "@vue/prettier",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "prettier/prettier": "error",
    // "no-console": import.meta.env.NODE_ENV === "production" ? "warn" : "off",
    // "no-debugger": import.meta.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "vue/multi-word-component-names": "off",
    "vue/no-reserved-component-names": "off",
  },
};
