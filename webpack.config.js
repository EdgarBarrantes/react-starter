let path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    devtool: 'cheap-module-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Hot Module Replacement'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        path: path.join(__dirname, '/dist/build'),
        filename: '[name].bundle.js',
        publicPath: '/dist/build',
        soruceMapFilename: '[name].map'
    },
    devServer: {
        port: 3000,
        host: 'localhost',
        // Makes it possible to hit back in the browser. (:
        historyApiFallback: true,
        noInfo: false,
        stats: 'verbose',
        publicPath: '/dist/build',
        contentBase: path.join(__dirname, '/dist/build'),
        hot: true
    },
    module: {
        rules: [
            // I need to add SASS here.
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.js|.jsx?$/,
                exclude: /(node_modules)/,
                loaders: ["babel-loader"]
            }
        ]
    }
}