module.exports = {
  globals: {},
  testEnvironment: 'jsdom',
  "moduleFileExtensions": [
    "js",
    "vue"
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.vue$': 'vue-jest',
  },
  testMatch :[ "**/?(*.)+(spec|test).[jt]s?(x)" ]
}
