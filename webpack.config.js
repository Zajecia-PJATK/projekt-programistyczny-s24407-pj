const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')]
            }
        ]
    },
    resolve: {
        extensions: ['.ts','.js']
    },
    output:{
        publicPath: 'build',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    }
}