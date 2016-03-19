var path = require('path');
var webpack = require('webpack');

var options = {
    devtool: 'eval-source-map',
    entry: [
        './src/neuralnet'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
          __DEVTOOLS__: true
        })
    ],
    module: {
        loaders: [{
            test: /\.js?$/,
            loaders: ['react-hot', 'babel-loader'],
            include: path.join(__dirname, 'src'),
            exclude: path.join(__dirname, 'node_modules')
        }]
    }
};

module.exports = options;
