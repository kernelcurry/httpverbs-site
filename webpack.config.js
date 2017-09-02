let webpack = require('webpack');
let path = require('path');
let glob = require('glob');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let PurifyCSSPlugin = require('purifycss-webpack');
let WebpackCleanPlugin = require('webpack-clean-plugin');
let ManifestPlugin = require('webpack-manifest-plugin');
const ChunkHashReplacePlugin = require('chunkhash-replace-webpack-plugin');
let isProduction = (process.env.NODE_ENV === 'production');

module.exports = {
    entry: {
        build: [
            './src/index.js',
            './src/css/build.css'
        ],
        vendor: ['normalize.css', 'wingcss']
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    plugins: [
        new WebpackCleanPlugin({
            on: "emit",
            path: [path.resolve(__dirname, 'dist')]
        }),
        new ExtractTextPlugin("[name].[chunkhash].css"),
        new ChunkHashReplacePlugin({
            src: 'index.html',
            dest: 'dist/index.html',
        }),
        new PurifyCSSPlugin({
            paths: glob.sync(path.join(__dirname, 'dist/*')),
            minimize: isProduction
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: isProduction
        }),
        new ManifestPlugin()
    ]
};
