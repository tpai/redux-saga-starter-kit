const config = require('./webpack.config.js');

module.exports = Object.assign({}, config, {
    mode: 'development',
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
    ]
});
