import webpack from "webpack"
import HtmlWebpackPlugin from "html-webpack-plugin"
import Dotenv from "dotenv-webpack"
import path from "path"
import { postCssLoader, sassLoader, lessLoader, cssLoader, styleLoader, loadEnvVars } from "./webpack/settings.common"

export default {
  resolve: {
    extensions: ["*", ".js", ".jsx", ".json"],
    alias: {
      "../../theme.config$": path.join(process.cwd(), "src", "styles", "theme.config.less"),
      "./themes/themes/github/assets/fonts": path.join(process.cwd(), "src", "fonts", "semantic"),
      "./themes/themes": path.join(process.cwd(), "node_modules", "semantic-ui-less", "themes")
    }
  },
  devtool: "eval-source-map", // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
  entry: [
    // must be first entry to properly set public path
    "./src/webpack-public-path",
    "react-hot-loader/patch",
    "webpack-hot-middleware/client?reload=true",
    path.resolve(__dirname, "src/index.js") // Defining path seems necessary for this to work consistently on Windows machines.
  ],
  target: "web", // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
  output: {
    path: path.resolve(__dirname, "dist"), // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    new Dotenv({
      path: "./.env.example",
      safe: true,
      systemvars: true
    }),
    new webpack.DefinePlugin(loadEnvVars({
      __DEV__: true
    })),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({     // Create HTML file that includes references to bundled CSS and JS.
      template: "src/index.ejs",
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      inject: true
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true,
      noInfo: true, // set to false to see a list of every file being bundled.
      options: {
        context: "/"
      }
    })
  ],
  module: {
    rules: [
      {test: /\.jsx?$/, exclude: /node_modules/, loaders: ["babel-loader"]},
      {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: "file-loader"},
      {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff"},
      {test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream"},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml"},
      {test: /\.(jpe?g|png|gif)$/i, loader: "file-loader?name=[name].[ext]"},
      {test: /\.ico$/, loader: "file-loader?name=[name].[ext]"},
      {
        test: /(\.css)$/,
        use: [styleLoader, cssLoader, postCssLoader]
      },
      {
        test: /(\.scss|\.sass)$/,
        use: [styleLoader, cssLoader, postCssLoader, sassLoader]
      },
      {
        test: /(\.less)$/,
        use: [styleLoader, cssLoader, postCssLoader, lessLoader]
      }
    ]
  }
}
