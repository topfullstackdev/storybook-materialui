module.exports = {
  displayName: 'components',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverage: true,
  coverageReporters: ['text', 'html'],
  collectCoverageFrom: ['./src/lib/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: ['(.*).stories.tsx'],
  coverageThreshold: {
    './libs/components/main/src/lib/': {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  coverageDirectory: '../../../coverage/libs/components/main',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/svg-mock.ts',
  },
};
