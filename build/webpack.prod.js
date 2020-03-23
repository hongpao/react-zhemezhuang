/**
 * 生产环境打包编译
 */

const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(common, {
    /**
     * production 可以压缩代码
     */
    mode: 'production',
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        })
    ]
})