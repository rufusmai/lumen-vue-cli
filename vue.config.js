const path = require('path');

module.exports = {
    outputDir: './public/',
    indexPath: '../resources/views/app.blade.php',
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].template = './resources/js/vue/index.html'
                return args
            })
        config.entry('app')
            .clear()
            .add('./resources/js/vue/main.js')
            .end()
        config.resolve.alias
            .set('@', path.join(__dirname, './resources/js/vue/'))
        config
            .plugin('copy')
            .tap(args => {
                if (args[0] != null) {
                    args[0][0].from = path.join(__dirname, './resources/static')
                    return args
                }
            })
    }
}
