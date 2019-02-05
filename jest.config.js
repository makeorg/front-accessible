module.exports = {
  transform: {
    '^.+\\.(js)$': '<rootDir>/node_modules/babel-jest'
  },
  snapshotSerializers: [
    require.resolve('snapshot-diff/serializer.js')
  ],
  setupFilesAfterEnv: ['<rootDir>/test/setup.js'],
  testPathIgnorePatterns: ['\\.snap$', '\\.svg$', '<rootDir>/node_modules/']
};
