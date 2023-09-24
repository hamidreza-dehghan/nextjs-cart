module.exports = {
  moduleNameMapper: {
    '^components/(.*)$': '<rootDir>/components/$1',
    '^containers/(.*)$': '<rootDir>/containers/$1',
    '^store/(.*)$': '<rootDir>/store/$1',
    '^hooks/(.*)$': '<rootDir>/hooks/$1',
    routes: '<rootDir>/routes',
    theme: '<rootDir>/theme',
    store: '<rootDir>/store',
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
}
