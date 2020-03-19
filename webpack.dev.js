/**
 * 开发环境打包编译
 */

const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'development',
    // devtool: 'inline-source-map',
	devtool: '#cheap-module-eval-source-map',
    devServer: {
        contentBase: './release', //可访问文件目录
        hot: true
    }
})