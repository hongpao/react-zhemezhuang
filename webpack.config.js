/**
 * react 工程打包配置
 */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
    // 模式
    // mode: 'development', //production

    // 入口文件
    entry: {
        index: './src/index.js'
    },

    // 编译后输出文件
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'release'),
        publicPath: ''
    },

    // 配置模块如何解析
    // resolve: {
    //     extensions: ['.js', '.json'],
    //     alias: {
    //         '@': path.resolve(__dirname, './src'),
    //         // 'apiConfig': getConfigPath(),
    //     }
    // },

    //
    // devtool: "source-map",

    // 匹配规则
    module: {
        rules: [
        //     {
        //     test: /\.css$/,
        //     loader: [
        //         'style-loader',
        //         'css-loader',
        //         'less-loader'
        //     ]
        // }, {
        {
            test: /\.js$/,
            use: {
                loader: 'babel-loader'
            },
            exclude: '/node_modules/' //exclude是定义不希望babel处理的文件
        }]
    },

    //配置如何展示性能提示。例如，如果一个资源超过 250kb，webpack 会对此输出一个警告来通知你。
    performance: {
        hints: false, //打开/关闭提示
        maxEntrypointSize: 400000, //此选项根据入口起点的最大体积，控制 webpack 何时生成性能提示。默认值是：250000 (bytes)。
        maxAssetSize: 100000, //资源(asset)是从 webpack 生成的任何文件。此选项根据单个资源体积，控制 webpack 何时生成性能提示。默认值是：250000 (bytes)。
    },

    plugins: [
        // 打包输出HTML
        new HtmlWebpackPlugin({

            /**
             * 顾名思义， 设置生成的 html 文件的标题。
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
                minifyJS: true,

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
            filename: './index.html',

            /**
             * html模板所在的文件路径
             */
            template: './src/page/index.html',

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

module.exports = config