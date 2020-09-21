const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: './src/index.jsx'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js'
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },  
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/env', '@babel/react'],
          }

        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 8080
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
};