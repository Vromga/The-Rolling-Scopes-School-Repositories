module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "airbnb-base",
        "prettier"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "no-switch-case-fall-through": "off",
        "no-shadow": "off",
        "no-bitwise": "off",
        "no-param-reassign": 0,
        "no-constant-condition": 0,
        "no-use-before-define": 0,
        "no-restricted-syntax": 0,
        "no-unused-expressions": 0
    }
};