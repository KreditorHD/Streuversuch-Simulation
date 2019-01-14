var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: [ '.ts'],
  },
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};
