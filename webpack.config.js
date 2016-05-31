var path = require('path');
var webpack = require('webpack');
var pkg = require('./package.json');

var _ = require('lodash');


var pathAppTo;

function pathTo() {
    return path.join(__dirname, 'src', path.join.apply(path, arguments));
}

pathAppTo = _.partial(pathTo, 'app');

module.exports = {
    entry:'./src/app/app.jsx',
    output: {path: 'dist', filename: 'bundle.js'},
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            }

        ]
    },
    resolve: {
        root: path.join(__dirname, 'src', 'app'),
        extensions: ['', '.js', '.jsx', '.styl', 'css'],
        alias: {
            //application aliases
            actions: pathAppTo('actions'),
            components: pathAppTo('components'),
            lib: pathAppTo('lib'),
            mixins: pathAppTo('mixins'),
            modals: pathAppTo('modals'),
            models: pathAppTo('models'),
            resources: pathAppTo('resources'),
            services: pathAppTo('services'),
            stores: pathAppTo('stores'),
            views: pathAppTo('views'),
            utils: pathAppTo('utils'),
            parts: pathAppTo('parts'),
            assets: pathTo('assets'),
            config: pathAppTo('config.js')
        }
    },
};