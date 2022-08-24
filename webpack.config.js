// imports for the server side
const NodeExternals = require('webpack-node-externals')
const path = require('path')

// client config
const clientConfig = {
    entry: {

        // home page dist
        home: path.resolve(__dirname, 'src', 'js', 'client', 'home.js'),
    },
    output: {
        path: path.resolve(__dirname, 'static', 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, 'src'),
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }]
    }
}

// server config
const serverConfig = {
    entry: path.resolve(__dirname, 'server', 'index.js'),
    output: {
        path: __dirname,
        filename: 'server.js'
    },
    target: "node",
    externals: [
        new NodeExternals()
    ],
    module: {
        rules: [{
            test: /\.js$/,
            include: [
                path.resolve(__dirname, 'server'),
                path.resolve(__dirname, 'src')
            ],
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }]
    }
}

// export both config objects
module.exports = [ clientConfig, serverConfig ]
