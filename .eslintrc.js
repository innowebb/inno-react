module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
	],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	rules: {
		indent: [2, 'tab', { SwitchCase: 1 }],
		'no-tabs': 0,
		'no-underscore-dangle': 'off',
		'react/jsx-indent': ['off', 'tab'],
		'react/jsx-indent-props': ['off', 'tab'],
		'react/jsx-filename-extension': 0,
		'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
		'import/no-unresolved': 'off',
		'react/jsx-props-no-spreading': 'off',
		'arrow-parens': ['error', 'as-needed'],
		'no-nested-ternary': 0,
		'no-shadow': 0,
		'jsx-a11y/no-autofocus': 0,
	},
};
