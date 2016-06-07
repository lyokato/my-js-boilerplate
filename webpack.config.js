module.exports = {
  entry: "./src/main.js",
  output: {
    path: __dirname + "/scripts", 
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/, 
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-2"],
        }
      }
    ] 
  }
}
