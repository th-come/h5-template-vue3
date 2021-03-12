module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/typescript/recommended',
		'@vue/prettier',
		'@vue/prettier/@typescript-eslint'
	],
	parserOptions: {
		ecmaVersion: 2020
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'@typescript-eslint/no-inferrable-types': 'off',
		indent: [2, 'tab'],
		'no-tabs': 0,
		'prettier/prettier': [
			'error',
			{ useTabs: true, tabWidth: 4, singleQuote: true }
		],
		'@typescript-eslint/no-explicit-any': ['off']
	}
};
