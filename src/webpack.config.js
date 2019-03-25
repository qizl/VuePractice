const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: './vuepractice/wwwroot/js/tool/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'vuepractice', 'wwwroot', 'js', 'tool')
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};