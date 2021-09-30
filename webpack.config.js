module.exports = function(config, {isClient, isDev}) {
  module: {
    rules: [{
      test: /\.(woff|woff2|eot|ttf|svg|pdf)(\?.*$|$)/,
      loader: 'file-loader',
    }];
  }
  return config;
};
