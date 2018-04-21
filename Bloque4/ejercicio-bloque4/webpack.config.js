var path = require('path');
module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, './src'),
    entry: {
        index: './index.js',
        'new-event': './new-event.js',
        common: ['./constants.js', './event.class.js', './http.class.js']
    },
    output: {
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: { // Configuración del servidor web de desarrollo
        contentBase: path.resolve(__dirname, './'),
        publicPath: '/dist/'
        },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['latest'] },
                }],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
            // Aquí estarían los loaders para otros tipos de archivo
        ]
    },

};