const HtmlWebpackPlugin = require('html-webpack-plugin') ;
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer:{
        contentBase: './dist'
    },
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins:[
        new HtmlWebpackPlugin({
        title: '效率加快',
        template: 'src/assets/index.html'
    }),
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[id].[contenthash].css',
        ignoreOrder: false,
    })
],
    module: {
        rules:[
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader',
                ],
                // use: ['style-loader','css-loader'],
            },
        ],
    },
};