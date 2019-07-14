module.exports = {
    entry: './src/main.ts',
    output: {
        filename: "bundle.js",
        library: "bundle",
        libraryTarget: "umd"
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        modules: ["node_modules"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: "ts-loader"
                }
            }
        ]
    }
};
