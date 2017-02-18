'use strict';

module.exports = {
  "root": true,
  "env": {
    "node": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": "off",
    "no-console": "off",
    "strict": "warn",
    "require-yield": "warn",
    "no-unused-vars": "off",
    "no-undef": "off"
    }
}