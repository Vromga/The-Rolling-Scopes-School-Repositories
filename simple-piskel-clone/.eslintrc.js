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
		"import/no-extraneous-dependencies": "off",
		"import/no-mutable-exports": "off",
		"no-constant-condition": "off",
		"no-restricted-syntax": "off",
		"no-unused-expressions": "off",
		"no-bitwise": "off",

	}
};
