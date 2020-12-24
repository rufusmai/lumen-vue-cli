const path = require('path');

module.exports = {
  outputDir: './public/',
  indexPath: '../resources/views/app.blade.php',
  devServer: {
    disableHostCheck: true,
    proxy: 'http://localhost:8081'
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].template = './resources/js/vue/index.html'
        return args
      })
    config.plugin('copy').tap(([pathConfigs]) => {
      pathConfigs[0].from = path.join(__dirname, './resources/static')
      return [pathConfigs]
    })
    config.entry('app')
      .clear()
      .add('./resources/js/vue/main.js')
      .end()
    config.resolve.alias
      .set('@', path.join(__dirname, './resources/js/vue/'))
  }
}
