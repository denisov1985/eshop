const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        eshop: './client/eshop/index.js',
        admin: './client/admin/index.js',
    },
    output: {
        filename: '[name].server-bundle.js',
        path: path.resolve(__dirname + '/app/Resources', 'webpack'),
        publicPath: "http://eshop.com/build/"
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'client/eshop/components/'),
            actions: path.resolve(__dirname, 'client/eshop/actions/')
        },
        extensions: ['.js', '.jsx']
    },

    plugins: [
        new CopyWebpackPlugin([
            // {output}/to/file.txt
            {from: 'app/Resources/webpack/eshop.server-bundle.js', to: '../../../web/build/eshop.bundle.js'},
            {from: 'app/Resources/webpack/admin.server-bundle.js', to: '../../../web/build/admin.bundle.js'},
        ])],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(eot)?$/,
                use: [
                    {
                        loader: 'url-loader'
                    }
                ]
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            mimetype: 'application/font-woff'
                        }
                    }
                ]
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            mimetype: 'application/octet-stream'
                        }
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015', 'react', 'stage-2']
                    }
                }
            }
        ]
    }
};