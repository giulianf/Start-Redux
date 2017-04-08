var path = require('path');
var webpack = require('webpack');
require('dotenv').config({
    path: path.join(__dirname,'src', 'config', `.env.development`),
    silent: true
});

module.exports = {
  devtool: 'source-map',
  entry: [
    // 'webpack-hot-middleware/client',
    path.join(__dirname, 'src', 'client', 'appStarting.js')
  ],
  output: {
    path: path.join(__dirname, 'src'),
    filename: 'bundle.js',
    publicPath: `http://localhost:${process.env.SERVER_CORS_PORT}/`
  },
  devServer: {
    hot: true,
    inline: true,
    //progress: true,
    stats: 'errors-only',
    port: process.env.SERVER_CORS_PORT,
    contentBase: "src/",
    historyApiFallback: {
      index: '/src/index.html'
    }
  },
  plugins: [
    new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
         process: {
             env: {
                 NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                 AUTH_AUDIENCE: JSON.stringify(process.env.AUTH_AUDIENCE),
                 AUTH_CLIENT_ID: JSON.stringify(process.env.AUTH_CLIENT_ID),
                 SUFFIXE: JSON.stringify(process.env.SUFFIXE),
                 SERVER_HOST: JSON.stringify(process.env.SERVER_HOST),
                 SERVER_PORT: JSON.stringify(process.env.SERVER_PORT),
                 VERSION: JSON.stringify(process.env.npm_package_version)
             }
         }
     })
  ],
  module: {
    rules: [
    // js
    {
      test: /\.js$/,
      use: [{
        loader: 'babel-loader',
        options: {
          cacheDirectory: 'babel_cache',
          presets: ['env', 'react' , 'stage-2']
        }
      }],
      include: path.join(__dirname, 'src', 'client')
    },
    // CSS
    {
      test: /\.scss/,
      include: path.join(__dirname, 'src', 'client'),
      use: [
              "style-loader",
              "css-loader",
              'sass-loader'
      ]
    },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: "url-loader?limit=10000"
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader" ,
        options:  {
          limit: 10000,
          mimetype: 'application/font-woff'
        }
      },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
    ]
  }
};
