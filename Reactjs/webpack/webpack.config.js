const path = require('path');
const webpackHtmlPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, './src/index.js'),
  output: {
    filename: 'main.js',
    path: path.join(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.(sc|c)ss$/,
        use: [
          //提取css
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                //保证scss文件里面，通过@import形式引入的scss文件也被postcss-loader解析
                require('postcss-import')(),
                //添加浏览器前缀
                require('autoprefixer')('last 100 versions'),
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpackHtmlPlugin({
      template: path.join(__dirname, './src/index.html'),
    }),
  ],
  devServer: {
    contentBase: path.resolve('./dist'),
    host: '127.0.0.1',
    port: 8888,
    open: true,
    // hot: true,
    compress: true,
    historyApiFallback: true,
  },
};
