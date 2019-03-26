var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [

      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [
              [
                "@babel/preset-env",
                {
                  "useBuiltIns": false,
                  "shippedProposals": false
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use:['style-loader','css-loader']
      }
    ]
  },
  externals: ['react', 'scrivito'],
  mode: 'production'
};