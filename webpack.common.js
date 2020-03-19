/**
 * 新webpack 工程打包 通用文件
 */

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
const config = require('./config/index.js')

// 获取 项目 环境 api 路径 , 如果是 noble 部署 则使用 prod
function getConfigPath() {
    let env = process.env.NODE_ENV === 'production' ? 'publish' : config.env
    console.log('> Get Api Config:', env);
    return path.resolve(__dirname, './config/env/', env);
}

module.exports = {
    entry: {
        index: './src/index.js'
    },

    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'release')
    },

    resolve: {
        extensions: ['.js', '.less', '.json'],
        alias: {
            '@': path.resolve(__dirname, '../src'),
            'BASE_URL': getConfigPath(),
        }
    },

    module: {
        rules: [{
            test: /\.(css|less)$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: ['file-loader']
        }, {
            test: /\.js$/,
            use: ['babel-loader'],
            exclude: '/node_modules/' //exclude是定义不希望babel处理的文件
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),

        //模块热替换
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),

        // 打包输出HTML
        new HtmlWebpackPlugin({

            /**
             * 顾名思义， 设置生成的 html 文件的标题。
             * 需要在模本页面设置，然后替换文案
             */
            title: 'hongpao',

            /**
             * hash选项的作用是 给生成的 js 文件一个独特的 hash 值
             * 该 hash 值是该次 webpack 编译的 hash 值。 默认值为 false。
             */
            hash: true,

            /**
             * 默认是true的， 表示内容变化的时候生成一个新的文件。
             */
            cache: true,

            /**
             * minify 的作用是对 html 文件进行压缩， minify 的属性值是一个压缩选项或者 false。 
             * 默认值为false, 不对生成的 html 文件进行压缩。
             */
            minify: {
                //是否对大小写敏感，默认false
                caseSensitive: true,

                //是否简写boolean格式的属性如：disabled="disabled" 简写为disabled  默认false
                collapseBooleanAttributes: true,

                //是否去除空格，默认false
                collapseWhitespace: true,

                //是否压缩html里的css（使用clean-css进行的压缩） 默认值false；
                minifyCSS: true,

                //是否压缩html里的js（使用uglify-js进行的压缩）
                minifyJS: false,

                //Prevents the escaping of the values of attributes
                preventAttributesEscaping: true,

                //是否移除属性的引号 默认false
                removeAttributeQuotes: true,

                //是否移除注释 默认false
                removeComments: true,

                //从脚本和样式删除的注释 默认false
                removeCommentsFromCDATA: true,

                //是否删除空属性，默认false
                removeEmptyAttributes: true,

                //若开启此项，生成的html中没有 body 和 head，html也未闭合
                removeOptionalTags: false,

                //删除多余的属性
                removeRedundantAttributes: true,

                //删除script的类型属性，在h5下面script的type默认值：text/javascript 默认值false
                removeScriptTypeAttributes: true,

                //删除style的类型属性， type="text/css" 同上
                removeStyleLinkTypeAttributes: true,

                //使用短的文档类型，默认false
                useShortDoctype: true,
            },

            /**
             * 输出的html的文件名称
             */
            filename: 'index.html',

            /**
             * html模板所在的文件路径
             */
            template: './index.html',

            /**
             * 注入选项
             * true： 默认值， script标签位于html文件的 body 底部
             * body： script标签位于html文件的 body 底部（ 同 true）
             * head： script 标签位于 head 标签内
             * false： 不插入生成的 js 文件， 只是单纯的生成一个 html 文件
             */
            inject: true,

            /**
             * 给生成的 html 文件生成一个 favicon。 
             * 属性值为 favicon 文件所在的路径名
             */
            favicon: './favicon.ico',

            /**
             * chunks主要用于多入口文件， 
             * 当你有多个入口文件， 那就回编译后生成多个打包后的文件， 
             * 那么chunks 就能选择你要使用那些js文件
             */
            chunks: ['index'],

            /**
             * 排除掉一些js
             */
            // excludeChunks: ['']
        })
    ]
}