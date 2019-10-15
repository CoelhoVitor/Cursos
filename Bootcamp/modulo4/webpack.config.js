const path = require('path')

module.exports = {
  // arquivo de entrada
  entry: path.resolve(__dirname, 'src', 'index.js'),
  // onde ficará o bundle (código transpilado pelo webpack)
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
  module: {
    // qual loader usar para cada tipo de arquivo
    rules: [
      {
        // expressão regular '//'
        // arquivo que contenha e termine com .js
        test: /\.js$/,
        // não há a necessidade de transpilar novamente os arquivos
        // do node_modules, já que o @babel já fez isso
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }, {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ]
      }, {
        test:/.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  }
};
