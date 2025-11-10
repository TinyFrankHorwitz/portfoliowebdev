const path = require('path');

module.exports = {
  entry: './src/index.html', // 👈 Entry point
  output: {
    path: path.resolve(__dirname, 'build'), // 👈 Output directory
    filename: 'bundle.js', // 👈 Output file name
    publicPath: './', // 👈 Base path for assets
  },
  module: {
    rules: [
      {
        test: /\.css$/, // 👈 Example loader for CSS
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
