/**
 * Created by garusis on 24/04/17.
 */
import autoprefixer from "autoprefixer"
import path from "path"

export const postCssLoader = {
  loader: "postcss-loader",
  options: {
    plugins: () => [autoprefixer]
  }
}

export const sassLoader = {
  loader: "sass-loader",
  options: {
    includePaths: [path.resolve(__dirname, "..", "src", "styles")],
    sourceMap: true
  }
}

export const lessLoader = {
  loader: "less-loader",
  options: {
    sourceMap: true
  }
}

export const cssLoader = {
  loader: "css-loader",
  options: {
    sourceMap: true
  }
}

export const styleLoader = {
  loader: "style-loader"
}
