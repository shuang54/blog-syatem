module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset', ["@babel/preset-env",
      {
        "targets": {
          "chrome": "80"
        },
        "useBuiltIns": "entry", "corejs": {
          "version": 3,
          "proposals": false
        }
      }]
  ],
  "plugins": [
    "@babel/plugin-transform-runtime",
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
