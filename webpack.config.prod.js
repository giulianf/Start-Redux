var path = require('path');
var webpack = require('webpack');
var pkg = require('./package.json');
require('dotenv').config({
    path: path.join(__dirname,'src', 'config', `.env.production`),
    silent: true
});

const extractSass = new ExtractTextPlugin({
  filename: '[name].min.css',
  disable: false
});


module.exports = {
  devtool: 'nosources-source-map',
  entry: {
    app:path.join(__dirname, 'src', 'client', 'appStarting.js'),
    vendor: Object.keys(pkg.dependencies.filter(function(item) {
      if (item.indexOf('raven') !== -1 || item.indexOf('react') !== -1 || item.indexOf('redux') !== -1 || item.indexOf('stylus') !== -1) {
        return true;
      }
    }))
  },
  output: {
    path: path.join(__dirname, 'dist-client'),
    filename: '[name].min.js',
    publicPath: '/resources/'
  },
  plugins: [
    new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin(
     'vendor',
     '[name].min.js',
     Infinity
   ),
   new webpack.optimize.UglifyJsPlugin({
     compress: {
       warnings: false,
       screw_ie8: true
     }
   }),
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
    }),
    extractSass
  ],
  module: {
    rules: [
    // js
    {
      test: /\.js$/,
      //  test: path.join(__dirname, 'src', 'client'),
      use: [{
                loader: 'babel-loader' ,
                options: {
                  cacheDirectory: 'babel_cache',
                  presets: ['react', 'env', 'stage-2']
                }
              }],
      exclude: [/node_modules/,path.resolve(__dirname, "src/server")]
    },
    // CSS
    {
      test: /\.scss$/,
      use: extractSass.extract({
        use: [{
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }],
        // use style-loader in development
        fallback: "style-loader"
      })
    },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      {
        test: /\.(png|jpg|jpeg|gif)$/, loader: "url-loader?limit=10000"
      },
    ]
  }
};
