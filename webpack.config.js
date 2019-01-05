module.exports = {
    entry : __dirname + "/tornado/src/index.js",
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
                test : /\.js?$/,
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