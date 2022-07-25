var HtmlWebpackPlugin = require('html-webpack-plugin') 
var path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins:[new HtmlWebpackPlugin({
        title: '效率加快',
        template: 'src/assets/index.html'
    })]
};