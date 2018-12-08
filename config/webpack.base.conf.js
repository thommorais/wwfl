const StyleLintPlugin = require('stylelint-webpack-plugin')

process.noDeprecation = true

module.exports = {
  module: {
    rules: [
      {
        test    : /\.html$/,
        loader  : 'html-loader',
        options : { minimize: false }
      },
      {
        enforce : 'pre',
        test    : /\.(js|jsx)$/,
        exclude : [/node_modules/],
        loader  : 'eslint-loader'
      },
      {
        test    : /\.(js|jsx)$/,
        exclude : [/node_modules/],
        loader  : 'babel-loader'
      },
      {
        test    : /\.(woff(2)?|eot|ttf|otf|png|jpe?g|gif|svg)$/,
        loader  : 'url-loader',
        options : {
          limit: 10000
        }
      }
    ]
  },
  plugins: [new StyleLintPlugin()]
}
