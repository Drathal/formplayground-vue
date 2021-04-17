module.exports = {
  globals: {},
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'ts', 'vue'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '.*\\.vue$': 'vue-jest'
  },
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)']
}
