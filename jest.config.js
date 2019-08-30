module.exports = {
  modulePaths: ['<rootDir>/src'],
  testRegex: '.*.test\\.tsx$',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  setupFiles: ['@testing-library/react/dont-cleanup-after-each', '<rootDir>/testSetup.js'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};
