const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssWebpackPlugin = require('optimize-css-assets-webpack-plugin')


module.exports = {
    
    mode: 'production',

    entry: __dirname + '/src/index.js',

    output: {
        filename: 'bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin(),
        new MiniCssWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "style.css"
        })
    ],
    
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            })
        ]
    },

    module: {
        rules: [
            //react/jsx to js
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ["@babel/plugin-proposal-class-properties"]
                    }
                }
            },

            //css like files
            { 
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader', // Adiciona CSS a DOM injetando a tag <style>
                    'css-loader', // interpreta @import, url()...
                    'sass-loader', //compile sass/scss to css
                ]
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx']
    }
}