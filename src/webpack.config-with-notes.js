import path from "node:path";  //need path.resolve() method to add 'dist' to the root to create a absolute path

export default {
    mode: "development",
    entry: "./src/index.js",  //should match the real path of 'index.js'
    output: {
        fileName: "main.js",  //the file name will generated, can be anyname
        path: path.resolve(import.meta.dirname), //the absolute path where the genrated file in
        clean: true,  //everytime rerun the file, it will clean the last one
    }
}