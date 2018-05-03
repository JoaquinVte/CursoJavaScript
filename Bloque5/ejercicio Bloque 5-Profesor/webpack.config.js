let webpack = require('webpack');

module.exports = {
    mode: "development",
    devtool: 'inline-source-map',
    context: __dirname + '/src',
    entry: {
        index: './index.ts',
        newevent: './new-event.ts'
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/dist'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    devServer: {
        contentBase: __dirname, // Default (project's root directory)
        publicPath: '/dist/', // Path where bundles are
        compress: true, // Enable gzip compresion when serving content
        port: 8080 // Default
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: [/node_modules/],
                loader:'ts-loader',
                
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.handlebars$/,
                loader: 'handlebars-loader'
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                common: {
                    chunks: 'initial',
                    name: 'common',
                    minChunks: 2,
                    minSize: 0
                }
            }
        }
    }
};
