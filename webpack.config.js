const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const paths = {
  src: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist'),
  styles: path.relative(__dirname, 'src/styles'),
  view: path.resolve(__dirname, 'src/view'),
  store: path.resolve(__dirname, 'src/store'),
  lib: path.resolve(__dirname, 'src/lib'),
  settings: path.resolve(__dirname, 'src/settings'),
  components: path.resolve(__dirname, 'src/components'),
  core: path.resolve(__dirname, 'src/core'),
};

module.exports = {
  context: paths.src,
  mode: 'development',
  entry: './index.ts',
  devServer: {
    hot: true,
    open: true,
    port: 7777,
    static: {
      directory: paths.src,
    },
    compress: true,
    allowedHosts: ['*'],
    historyApiFallback: true,
  },
  output: {
    filename: 'bundle.js',
    path: paths.dist,
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.ts', '.js', '.tsx', '.jsx', '.css', '.scss'],
    alias: {
      '@view': paths.view,
      '@store': paths.store,
      '@lib': paths.lib,
      '@settings': paths.settings,
      '@components': paths.components,
      '@core': paths.core
    }
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: !isDev
      }
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `css/${isDev ? '[name]' : '[hash:8]_[id]'}.css`,
      chunkFilename: `css/${isDev ? '[name]' : '[hash:8]_[id]'}.css`,
      ignoreOrder: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.module.(css|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]'
              }
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                importLoaders: 1,
                modules: {
                  localIdentName: '[name]__[local]--[hash:base64:5]'
                },
                includePaths: [paths.styles]
              },
            },
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        exclude: /\.module.(css|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: { sassOptions: { includePaths: [paths.styles] } },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
    ]
  }
}