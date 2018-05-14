const config = require('./webpack.config.js');

module.exports = Object.assign({}, config, {
  mode: 'production',
  entry: './src/index'
});
