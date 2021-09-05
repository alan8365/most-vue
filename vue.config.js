module.exports = {
  publicPath: process.env.NODE_ENV === 'dev' ?
    '/' :
    '/most/',
  chainWebpack: (config) => {
    config
        .plugin('html')
        .tap((args) => {
          args[0].title = 'MOST';
          return args;
        });
  },
};
