import path from "node:path";  //need path.resolve() method to add 'dist' to the root to create a absolute path
import HtmlWebpackPlugin from "html-webpack-plugin"; // need install first

export default {
    mode: "development",
    entry: "./src/index.js",  //should match the real path of 'index.js'
    output: {
        fileName: "main.js",  //the file name will generated, can be anyname
        path: path.resolve(import.meta.dirname), //the absolute path where the genrated file in
        clean: true,  //everytime rerun the file, it will clean the last one
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html", //need create this file manually
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"] //for every .css file, use style-loader and css-loader
            },
            {
                test: /\.html$/i,
                use: ["html-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            }
        ]
    }
}