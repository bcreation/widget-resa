module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
		commonjs: true,
		es6: true
	},
	extends: [ 'plugin:vue/essential', '@vue/prettier' ],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				semi: false,
				useTabs: false,
				bracketSpacing: true,
				arrowParens: 'always',
				trailingComma: 'all'
			}
		],
		'eol-last': [ 'error', 'always' ],
		semi: [ 'error', 'never' ]
	},
	parserOptions: {
		parser: 'babel-eslint',
		sourceType: 'module'
	}
};
