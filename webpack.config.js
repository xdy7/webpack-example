const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist')
    },

    module: {
        rules: [{
            // test: /\.html$/,
            // loader: 'html-loader'
        }]
        // 局部加载 html、自定义模板文件
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            title: '首页',
            // favicon: 'favicon.ico',
            
        }),
        new HtmlWebpackPlugin({
            filename: 'static/about.html',
            template: 'src/page/about.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'static/header.html',
            template: 'src/template/header.html'
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'header',
        //     filename: 'src/template/header.html'
        // })
    ]
}
