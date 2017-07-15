module.exports = {
  entry: "./src/home.js",
  output: {
    path: __dirname,
    filename: "./public/js/bundle.js"
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
        query: {
          presets: ['env']
        }
      }
    ],
  },
  target: 'node'
};
