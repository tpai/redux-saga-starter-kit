/* global __dirname */
var path = require('path');

module.exports = {
    resolve: {
        modules: [ path.resolve('./src'), 'node_modules' ],
        extensions: ['.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'public/'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    { loader: 'babel-loader' }
                ],
                exclude: /node_modules/
            }
        ]
    }
};
