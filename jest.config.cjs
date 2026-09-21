module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  // Thêm dòng này để Jest không bị lỗi ES Module với các file tsx/ts
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
};