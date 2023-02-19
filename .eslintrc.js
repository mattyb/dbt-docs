module.exports = {
  "plugins": [
    "angular",
  ],
  "extends": [
    "eslint:recommended",
    "plugin:angular/johnpapa",
    "prettier",
  ],
  "ignorePatterns": [
    "scripts.js",
  ],
  "env": {
    "browser": true,
    "node": true,
    "jquery": true,
    "es6": true,
    "amd": true,
    "commonjs": true,
    "es2018": true,
  },
  "parserOptions": {
    "sourceType": "module",
  },
  "rules": {
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "angular/controller-as-route": "off",
    "angular/controller-as": "off",
    "angular/no-run-logic": "off",
    "angular/function-type": ["error", "anonymous"],
    // TODO
    "angular/file-name": "off",
    "angular/controller-name": "off",
  },
  "globals": {
    "angular": "readonly",
    "_": "writeable",
    "Prism": "readonly",
  },
  "overrides": [{
    "files": [
      "**/*.test.js",
    ],
    "env": {
       "jest": true,
    },
  }],
}
