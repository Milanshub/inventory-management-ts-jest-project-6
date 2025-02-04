// cypress/webpack.config.js
const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // Add your file extensions
    alias: {
      '@': path.resolve(__dirname, '../src') // Make sure this points to the `src` folder
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Add any other loaders you may need
      },
      // Add any additional rules for your project
    ],
  },
};
