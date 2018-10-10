module.exports = {
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }, {
          // Match woff2 in addition to patterns like .woff?v=1.1.1.
          test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
          use: {
            loader: 'url-loader',
            options: {
              // Limit at 50k. Above that it emits separate files
              limit: 50000,

              // url-loader sets mimetype if it's passed.
              // Without this it derives it from the file extension
              mimetype: 'application/font-woff',

              // Output below fonts directory
              name: './fonts/[name].[ext]'
            }
          }
        }, {
          test: /\.(jpg|png|svg)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[path][name].[hash].[ext]'
            }
          }
        }
      ]
    }
  }
};
