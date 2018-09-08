module.exports = {
	env: {
		browser: true,
		commonjs: true,
		node: true,
		es6: true,
		mocha: true,
	},
	extends: ['eslint:recommended', 'plugin:vue/essential'],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		"no-console": "off",
	}
};
