module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off',
    "vue/multi-word-component-names": [//关闭驼峰式命名规则
      "error",
      {
        ignores: ["index"], //需要忽略的组件名
      },
    ],
  },
  "globals": {
    "error": true
  }
}
