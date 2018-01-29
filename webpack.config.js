module.exports = {
    entry: './index.js',
    output: {
        path: '/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            exclude: '/node_modules',
            loader: 'babel-loader'
        }]
    }
}