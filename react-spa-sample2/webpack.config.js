module.exports = {
    mode: 'development',
    entry: './index.js', // エントリポイントのjsxファイル
    output: {
        filename: 'bundle.js' // 出力するファイル
    },
    module: {
        rules: [
            {
                test: /\.js$/, // 拡張子がjsで
                exclude: /node_modules/, // node_modulesフォルダ配下は除外
                use: {
                    loader: 'babel-loader', // babel-loaderを使って変換する
                    options: {
                        plugins: ["transform-react-jsx", "babel-plugin-transform-decorators-legacy"] // babelのtransform-react-jsxプラグインを使ってjsxを変換
                    }
                }
            }
        ]
    }
}
