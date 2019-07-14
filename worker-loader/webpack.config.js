module.exports = {
    entry: "./src/main.ts",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".ts", ".tsx"],
        modules: ["node_modules"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            }
        ]
    }
};
