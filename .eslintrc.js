module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended'
  ],
  env: {
    node: true,
    es6: true,
    browser: true,
    jest: true
  },
  settings: {
    'prettier-vue': {
      SFCBlocks: {
        template: true,
        script: true,
        style: true,
        customBlocks: {
          docs: { lang: 'markdown' },
          config: { lang: 'json' },
          module: { lang: 'js' },
          comments: false
        }
      },
      usePrettierrc: true,
      fileInfoOptions: {
        ignorePath: '.testignore',
        withNodeModules: false
      }
    }
  },
  rules: {
    'vue/component-definition-name-casing': [1, 'kebab-case']
  }
}
