import { resolve } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

const frontConfig = {
  entry: "./src",
  mode: "development",
  target: "web",
  output: {
    path: resolve("dist", "www"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: resolve(__dirname, "public/index.html") })
  ],
  devServer: {
    compress: true,
    port: 3000
  }
};

const backConfig = {
  entry: "./server.js",
  mode: "development",
  target: "node",
  output: {
    path: resolve("dist"),
    filename: "server.js"
  }
};

export default [frontConfig, backConfig];
