module.exports = {
  moduleFileExtensions: ['js', 'yaml'],
  transform: {
    '^.+\\.ya?ml$': '<rootDir>/node_modules/yaml-jest',
    '^.+\\.(js)$': '<rootDir>/node_modules/babel-jest',
  },
  snapshotSerializers: [require.resolve('snapshot-diff/serializer.js')],
  setupFilesAfterEnv: ['<rootDir>/test/setup.js'],
  testPathIgnorePatterns: ['\\.snap$', '\\.svg$', '<rootDir>/node_modules/'],
};
