module.exports = {
  verbose: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/index.js',
    '!**/node_modules/**',
  ],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'jest tests',
        outputDirectory: 'coverage/jest/',
        outputName: './test-report.xml',
        classNameTemplate: vars => {
          return vars.classname.toUpperCase()
        },
        titleTemplate: vars => {
          return vars.title.toUpperCase()
        },
        ancestorSeparator: ' › ',
        usePathForSuiteName: 'true',
      },
    ],
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.css$': '<rootDir>/__mocks__/styleMock.js',
  },
}
