const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDevelopment = process.env.NODE_ENV === "development";

module.exports = {
  entry: "./index.js",
  output: {
    path: path.join(__dirname, "/build"),
    filename: "index_bundle.js",
    publicPath: isDevelopment ? "/" : "/profile/",
  },
  devServer: {
    inline: true,
    port: 8082,
    historyApiFallback: true,
    hot: true,
  },
  mode: isDevelopment ? "development" : "production",
  optimization: {
    minimize: !isDevelopment,
    splitChunks: {
      chunks: "all",
      minSize: 20000,
      maxSize: 244000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["babel-preset-es2015", "es2015", "react", "stage-2"],
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[hash].[ext]",
              publicPath: isDevelopment ? "/" : "/profile/",
            },
          },
        ],
      },
      {
        test: /\.(pcss|css)$/,
        use: [
          isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[path]-[name]-[local]",
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    ...(isDevelopment
      ? []
      : [
          new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
          }),
        ]),
  ],
};
