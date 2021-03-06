require('dotenv').load();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const EnvironmentPlugin = require('webpack').EnvironmentPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');

const cssExtract = new ExtractTextPlugin('main.css');

module.exports = {
    target: 'web',
    entry: './src/main.js',
    output: {
        path: './build',
        // path: '../portfolio-server/public',
        filename: 'main.js'
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        cssExtract,
        new EnvironmentPlugin(['API_URL']),
        new CopyWebpackPlugin([{
            from: './src/images',
            to: 'images'
        }])
    ],
    module: {
        preLoaders: [{
            test: /\.js$/,
            loader: 'eslint-loader',
            exclude: /node_modules/
        }],
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                cacheDirectory: true,
                // plugins: ['transform-runtime']
            }
        }, {
            test: /\.css$/,
            loader: cssExtract.extract(
                'style-loader',
                'css-loader'
            )	
        }, {
            test: /\.scss$/,
            loader: cssExtract.extract(
                'style-loader',
                'css-loader?sourceMap!sass-loader?sourceMap'
            )	
        }, {
            test: /\.html$/,
            loader: 'html-loader'	
        }]
    },
    sassLoader: {
        includePaths: ['./src/scss/partials']
    }
};