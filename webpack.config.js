const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode : 'development',
    entry : {
        app : './src/index.js'
    },
    devtool : 'inline-source-map',
    devServer : {
        static: './'
    },
    plugins : [
        new HtmlWebpackPlugin({
            title : 'Esercizio 1',
            template : './src/index.html',
            inject: 'body',
            filename: 'index.html',
        }),
        new CleanWebpackPlugin()
    ],
    output : {
        filename : '[name].bundle.js',
        path : path.resolve(__dirname, 'dist')
    },
    module : {
        rules : [
            {
                test : /\.(s(a|c)ss)$/,
                use : [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
};