module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:vue-pug/vue3-recommended',
    'plugin:json/recommended-with-comments',
    'plugin:markdown/recommended',
    '@nuxtjs/eslint-config-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  plugins: ['markdown'],
  rules: {
    // "vue/first-attribute-linebreak": [
    //   "error",
    //   {
    //     "singleline": "ignore",
    //     "multiline": "below"
    //   }
    // ],
    'prettier/prettier': 'error',
    'tailwindcss/no-custom-classname': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'off'
  }
}
