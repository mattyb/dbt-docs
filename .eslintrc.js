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
  },
  "rules": {
    "angular/controller-as-route": "off", // TODO
    "angular/controller-as": "off", // TODO
    "angular/file-name": "warn",
    "angular/controller-name": "warn",
    "angular/function-type": ["error", "anonymous"],
  },
  "globals": {
    "angular": "readonly",
    "_": "writeable",
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
