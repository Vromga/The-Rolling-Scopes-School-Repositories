let path = require('path');

let conf = {
    entry: './assets/src/index.js',
    output: {
        path: path.resolve(__dirname, 'assets/dist/'),
        filename: 'main.js',
        publicPath: 'dist/',
    },
    devServer: {
        overlay: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                //exclude: '/node_modules' задать исключение, что бы не гонять уже отредактированный код из модулей.
            },

        ]
    },
};

module.exports = (env, options) => {
    let production = options.mode === 'production';
    conf.devtool = production
        ? 'source-map' //false - что бы скрыть
        : 'eval-sourcemap';
    return conf;
};