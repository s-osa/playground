const webpack = require('webpack')

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        __dirname + '/index'
    ],
    devServer: {
        contentBase: __dirname,
        inline: true,
        hot: true,
        port: 8081,
        proxy: { // Proxy setting for CORS
            '/api/**': {
                target: 'http://localhost:8080',
                secure: false,
                changeOrigin: true
            }
        }
    },
    output: {
        publicPath: '/dist',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: __dirname,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            'transform-react-jsx',
                            'babel-plugin-transform-decorators-legacy'
                        ]
                    }
                }
            }
        ]
    }
}