const path = require('path')
// const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpackMerge = require('webpack-merge')
const loadPresets = require('./build-utils/loadPresets')
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env)

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) =>
  webpackMerge(
    {
      entry: {
        app: './src/index.js',
      },
      module: {
        rules: [
          {
            test: /\.(png|svg|jpe?g|gif)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 5000,
                },
              },
            ],
          },
          {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            options: { presets: ['@babel/env'] },
          },
        ],
      },
      plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
      },
    },
    modeConfig(mode),
    loadPresets({ mode, presets })
  )

// const common = {
//   entry: {
//     app: './src/index.js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(png|svg|jpg|gif)$/,
//         use: ['file-loader'],
//       },
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /(node_modules|bower_components)/,
//         loader: 'babel-loader',
//         options: { presets: ['@babel/env'] },
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader'],
//       },
//     ],
//   },
//   plugins: [
//     new CleanWebpackPlugin(['dist']),
//     new HtmlWebpackPlugin({
//       template: './public/index.html',
//     }),
//   ],
//   output: {
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
// }

// module.exports = config => merge(common, config)
