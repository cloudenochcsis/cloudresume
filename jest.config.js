module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      tsconfig: 'tsconfig.json',
      isolatedModules: true,
    }],
    '^.+\\.(js|jsx)$': ['babel-jest', {
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }],
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/index.tsx',
    '!src/reportWebVitals.ts',
  ],
  reporters: [
    'default',
    ['jest-junit', {
      outputDirectory: 'test-results/jest',
      outputName: 'results.xml',
      classNameTemplate: '{classname}',
      titleTemplate: '{title}',
    }],
  ],
};
