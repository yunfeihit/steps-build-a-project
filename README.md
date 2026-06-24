# Steps to build a project
These are steps to build a front-end git project from scratch.   
Based on [the Oding Project](https://www.theodinproject.com/dashboard).  

1. Add a **README.md** file  
- use `touch README.md`  
This is [rules of writing a markdown file](./src/rules-of-writing-markdown-file.md).  

2. Create **package.json** file  
- use `npm init`  
- initial npm so you can install packages.
- should choose *type: module* for modern JavaScript Project. also can use `npm init -y --init-type=module` instead.
- input other options 

3. Install **webpack**
- use `npm install --save-dev webpack webpack-cli` to install *Webpack* and *Webpack-cli*(command line interface for Weboack)  
(`--save-dev` equal to `-D`)
- use `touch webpack.config.js` to create webpack configuration file.  
template with notes: [webpack.config.js](./src/webpack.config-with-notes.js)  
template: [webpack.config.js](./src/webpack.config.js)

4. Build basic file structure
- use `mkdir src` create *src* folder  
also create folders:  *src/imgs*, *src/fonts*...
- use `touch ./src/index.js` create *index.js* file(the entry file which is set in the *webpack.config.js*)




