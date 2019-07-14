var OUTPUT_PATH = "dist";

module.exports = {
    entry: "./src/main.ts",
    output: {
        filename: "bundle.js",
        path: __dirname + "/" + OUTPUT_PATH
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".ts", ".tsx"],
        modules: ["node_modules"]
    },
    module: {
        rules: [
            {
                test: /\.worker\.(js|ts)$/,
                loader: "worker-loader",
                options: {
                    publicPath: OUTPUT_PATH + "/"
                }
            },
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            }
        ]
    }
};
