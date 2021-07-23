const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@src': resolve('src'),
      },
      extensions: ['.js', '.vue', '.json'],
    },
    output: {
      filename: `js/[name].[hash].js`,
      chunkFilename: `js/[name].[hash].js`,
    },
  },
  devServer: {
    open: false,
    port: 23333,
    disableHostCheck: true,
  },
};
