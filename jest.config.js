module.exports = {
  transform: {
    '^.+\\.(js)$': '<rootDir>/node_modules/babel-jest'
  },
  setupTestFrameworkScriptFile: '<rootDir>/test/setup.js',
  testPathIgnorePatterns: ['\\.snap$', '\\.svg$', '<rootDir>/node_modules/']
};
