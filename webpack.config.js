const HtmlWebpackPlugin = require('html-webpack-plugin');
const isProductionMode = process.env.NODE_ENV === "production";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: isProductionMode ? "production" : "development",
    cache: {
        type: 'filesystem',
        compression: 'gzip',
        cacheDirectory: path.resolve(__dirname, 'dist/.temp_cache'),
        allowCollectingMemory: true,
        buildDependencies: {
            config: [__filename],
        }
    },
    entry: {
        index: path.resolve(__dirname, './src/index.js'),

    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack dev structure',
            template: path.resolve(__dirname, './src/index.html'), // template file
            filename: 'index.html', // output file
            minify: true,
        }),
        new MiniCssExtractPlugin({
            filename: isProductionMode ? "[name].[contenthash].css" : "[name].css",
        }),
        new CopyPlugin({
            patterns: [
                { from: "src/images", to: "images" },
            ],
        }),
    ],
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        historyApiFallback: true,
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    module: {
        rules: [

            // JavaScript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env/'],
                    },
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    isProductionMode ? MiniCssExtractPlugin.loader : "style-loader",
                    "css-loader",
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: () => [
                                    require('autoprefixer')
                                ]
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                outputStyle: "compressed",
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    }, optimization: {
        minimize: true,
        minimizer: [
            `...`,
            new CssMinimizerPlugin(),
        ],
        removeAvailableModules: false,
    },
}
