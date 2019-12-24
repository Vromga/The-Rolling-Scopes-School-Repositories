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
		'no-unused-vars': [0],
		"no-unused-expression": 'off',
		"array-callback-return": "off",
		"consistent-return": "off",
		"prefer-destructuring": "off",
		"no-param-reassign": "off",

	}
};
