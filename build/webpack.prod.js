/**
 * 生产环境打包编译
 */

const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    /**
     * production 可以压缩代码
     */
    mode: 'production'
})