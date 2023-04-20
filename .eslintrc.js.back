/* global module */
let overrides = [];
try {
  overrides = require("./eslint.overrides.js");
} catch (e) {
  // No overrides rules defined
}

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:promise/recommended",
    "plugin:ramda/recommended",
    "plugin:jsdoc/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  plugins: ["react-hooks", "promise", "ramda", "prettier"],
  parser: "babel-eslint",
  rules: {
    curly: "error",
    eqeqeq: "error",
    "func-names": ["error", "as-needed"],
    "func-style": ["error", "declaration"],
    "jsdoc/require-hyphen-before-param-description": ["warn", "never"],
    "jsdoc/require-jsdoc": "off",
    "no-console": "error",
    "no-param-reassign": "error",
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "use-memo-one",
            importNames: ["useMemo", "useCallback"],
            message: "Aliased imports from use-memo-one are not allowed.",
          },
        ],
      },
    ],
    "no-unused-vars": [
      "error",
      {
        args: "none",
        ignoreRestSiblings: true,
      },
    ],
    "no-use-before-define": ["error", { functions: false }],
    "no-var": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": [
      "error",
      {
        destructuring: "all",
      },
    ],
    "promise/always-return": "off",
    "promise/avoid-new": "off",
    "promise/catch-or-return": ["error", { terminationMethod: ["catch", "asCallback", "finally"] }],
    "promise/no-callback-in-promise": "off",
    radix: "error",
    "ramda/cond-simplification": "off",
    "react/forbid-foreign-prop-types": "error",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "require-atomic-updates": "off",
  },
  env: {
    es2020: true,
    browser: true,
    jest: true,
  },
  overrides,
};

