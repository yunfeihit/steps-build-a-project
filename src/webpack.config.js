import path from "node:path"; 

export default {
    mode: "development",
    entry: "./src/index.js",  
    output: {
        fileName: "main.js", 
        path: path.resolve(import.meta.dirname), 
        clean: true,  
    }
}