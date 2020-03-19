/**
 * 新webpack 工程打包 通用文件
 */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'release')
    },
    module: {
        rules: [{
            test: /\.(css|less)$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        }, {
            test: /\.js$/,
            use: ['babel-loader'],
            exclude: '/node_modules/' //exclude是定义不希望babel处理的文件
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Production hongpao',
            filename: 'index.html',
            template: './index.html',
            favicon: './favicon.ico'
        })
    ]
}