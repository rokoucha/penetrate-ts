module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: './coverage',
  moduleFileExtensions: ['ts', 'js'],
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  testRegex: 'test.ts',
  transform: { '^.+\\.ts': 'ts-jest' },
}
