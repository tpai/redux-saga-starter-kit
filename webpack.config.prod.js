const config = require('./webpack.config.js');

module.exports = Object.assign({}, config, { entry: './src/index' });
