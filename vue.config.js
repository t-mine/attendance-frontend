module.exports = {
  publicPath: './',
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'attendance',
    },
  },
  devServer: {
    proxy: 'http://localhost:8882',
  },
};
