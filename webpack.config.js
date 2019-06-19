const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

//configura o meu frontend para o meu backend
module.exports = {
    entry: './frontend/app.js',
    output:{
        path: path.join(__dirname, 'backend/public'),
        filename: 'js/bundle.js'
    },
    mode:'development',
    //configura css 
     module : {
    rules: [
      {
        test: /\.css/,
        use: [
          devMode? 'style-loader': MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
    //para criar um dom no meu index.htm que esta no meu backend e comprimir
    plugins:[
        new HtmlWebpackPlugin({
            template: './frontend/index.html',
            minify:{
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes:true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype:true
            }
        }),
        new MiniCssExtractPlugin({
          filename:'css/bundle.css'
        })
    ],
    devtool: 'source-map'
}

