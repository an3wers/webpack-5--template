const webpack = require('webpack')
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    static: "./dist",
    // overlay: {
    //   warnings: false,
    //   errors: true,
    // },
    port: 8081,
  },
  plugins: [
      new webpack.SourceMapDevToolPlugin({
          filename: '[file].map',
      })
  ],
  devtool: 'eval-cheap-module-source-map',
});
