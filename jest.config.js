// jest.config.js
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './'
})

/** @type {import('jest').Config} */
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],

  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1'
  },
  testEnvironment: 'jest-environment-jsdom'
}

// eslint-disable-next-line no-undef
module.exports = createJestConfig(customJestConfig)
