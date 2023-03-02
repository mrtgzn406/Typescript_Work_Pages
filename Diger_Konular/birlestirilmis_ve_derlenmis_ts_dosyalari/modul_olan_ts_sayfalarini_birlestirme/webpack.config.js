const path = require('path');

module.exports = {
  entry: './src/ortak.ts',

  // mode: 'development',
  // minimize edilmemiş bir bundle.js sayfası istiyorsan bu yorumdaki kodları etkin yapman gerek ve bu yazının aşağısındaki "mode"ve "devtool" özelliklerini yoruma alman gerek. Yok eğer minimize edilmiş bir bundle.js sayfası istiyorsan bunun için sayfayı bu halde bırak, sayfa zaten şu an minmize edilmiş durumda.
  
  devtool: 'source-map',
  mode: 'production',
  
  
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
};
