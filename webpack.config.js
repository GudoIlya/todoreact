module.exports = {
    entry : __dirname + "/app3/driver.js",
    output : {
        path : __dirname + "/js/",
        filename : "bundle.js"
    },
    mode : 'development',
    devtool : "#sourcemap",
    module : {
        rules : [
            {
                test : /\.css$/,
                loader : "style-loader!css-loader"
            },
            {
                test : /\.jsx?$/,
                exclude : /(node_modules)/,
                loaders : ["babel-loader"]
            },
            {
                test: /\.html$/,
                loader: 'underscore-template-loader'
            }
        ]
    },
    watch: true
};