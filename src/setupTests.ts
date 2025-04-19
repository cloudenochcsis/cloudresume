import '@testing-library/jest-dom';

// Mock fetch globally
global.fetch = jest.fn();

beforeEach(() => {
  (fetch as jest.Mock).mockClear();
});

afterEach(() => {
  jest.resetAllMocks();
});
