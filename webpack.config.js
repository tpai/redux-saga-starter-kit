/* global __dirname */
var path = require('path');

module.exports = {
    devtool: 'cheap-module-source-map',
    devServer: {
        host: 'localhost',
        port: '3000',
        contentBase: 'public/',
        historyApiFallback: true
    },
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    resolve: {
        modules: [ path.resolve('./src'), 'node_modules' ],
        extensions: ['.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'public/'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use:  [
                   { loader: 'babel-loader' }
                ],
                exclude: /node_modules/
            }
        ]
    }
};
