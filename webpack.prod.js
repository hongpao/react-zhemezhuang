/**
 * 生产环境打包编译
 */

const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'production'
})