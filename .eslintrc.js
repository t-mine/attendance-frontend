module.exports = {
  "env": {
    "node": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/recommended",
    "plugin:vue-types/recommended",
    "plugin:prettier/recommended"
  ],
  "plugins": [
    "vue"
  ],
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "sourceType": "module",
    "parser": "babel-eslint"
  },
  "root": true,
  "rules": {
    "prettier/prettier": 0,
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "always"
    }],
    "vue-types/require-default-prop": 0,
    "vue/attribute-hyphenation": 0,
    "vue/no-parsing-error": 0,
    "no-extra-parens": 1,
    "no-multi-spaces": 2
  }
}
