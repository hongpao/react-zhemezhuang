/**
 * 开发环境打包编译
 */

const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'development',
    // devtool: 'inline-source-map',
    devtool: '#cheap-module-eval-source-map',
    devServer: {
        inline: true, //打包后加入一个websocket客户端
        hot: true, //热加载
        contentBase: path.resolve(__dirname, '../release'), //开发服务运行时的文件根目录
        host: 'localhost', //主机地址
        port: 9090, //端口号
        compress: true //开发服务器是否启动gzip等压缩
    }
})