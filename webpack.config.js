const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development', // или 'production' для финальной сборки
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true, // очищает папки dist перед каждой новой сборкой
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.hbs$/,
                use: ['handlebars-loader'],
            },
            // ваши остальные правила (например, для CSS)
        ],
    },
};