module.exports = {
	moduleFileExtensions: [ 'js', 'jsx', 'json', 'vue' ],
	setupFiles: [ './tests/unit/setup-jest.js' ],
	transform: {
		'^.+\\.vue$': 'vue-jest',
		'.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
		'^.+\\.jsx?$': 'babel-jest'
	},
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
		'^@node/(.*)$': '<rootDir>/node_modules/$1'
	},
	transformIgnorePatterns: [
		'node_modules/(?!vuejs-datepicker)' // ignore the vuejs-datepicker library imported (cause they test it and doesn't reconize functions)
	],
	testPathIgnorePatterns: [ '<rootDir>/tests/e2e', '<rootDir>/build/', '<rootDir>/node_modules/' ],
	snapshotSerializers: [ 'jest-serializer-vue' ],
	testMatch: [ '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)' ],
	collectCoverage: true,
	coverageDirectory: '<rootDir>/tests/unit/coverage',
	collectCoverageFrom: [ 'src/**/*.{js,vue}', '!src/main.js', '!**/node_modules/**' ]
};
