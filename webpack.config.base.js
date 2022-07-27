const HtmlWebpackPlugin = require('html-webpack-plugin') ;
const { request } = require('http');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins:[
        new HtmlWebpackPlugin({
        title: '效率加快',
        template: 'src/assets/index.html'
    }),
],
    module: {
        rules:[
            {
              test: /\.(png|svg|jpg|gif)$/,
              use: ["file-loader"]
            },
            {
                test: /\.styl$/,
                loader: ["style-loader", "css-loader", "stylus-loader"]
              },
              {
                test: /\.less$/,
                loader: ["style-loader", "css-loader", "less-loader"]
              },
            {
                test: /\.scss$/i,
                use: [
                  "style-loader",
                  "css-loader",
                  {
                    loader: "sass-loader",
                    options: {
                      implementation: require("dart-sass")
                    }
                  }
                ]
            }
        ]
    }
};