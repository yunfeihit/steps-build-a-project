# Steps to build a project
These are steps to build a front-end git project from scratch.   
Based on [the Oding Project](https://www.theodinproject.com/dashboard).  

## 1. Add a **README.md** file  
- use `touch README.md`  
This is [rules of writing a markdown file](./src/rules-of-writing-markdown-file.md).  

## 2. Create **package.json** file  
- use `npm init` to create.
- initial npm so you can install packages.
- should choose *type: module* for modern JavaScript Project. also can use `npm init -y --init-type=module` instead.
- input other options 

## 3. Create **.gitignore** file
- use `touch .gitignore` to create
- add *node_modules/* and *dist/* in [.gitignore](./src/.gitignore)

## 4. Install **webpack**
- use `npm install --save-dev webpack webpack-cli` to install *Webpack* and *Webpack-cli*(command line interface for Weboack)  
(`--save-dev` equal to `-D`)
- use `touch webpack.config.js` to create webpack configuration file. 
- config webpack.config.js:  
template with notes: [webpack.config.js](./src/webpack.config-with-notes.js)  
template: [webpack.config.js](./src/webpack.config.js)

## 5. Build basic file structure
- use `mkdir src` create *src* folder  
also create folders:  *src/imgs*, *src/fonts*...
- use `touch ./src/index.js` create *index.js* file(the entry file which is set in the *webpack.config.js*)

## 6. Install **HtmlWebpackPlugin**
- use `npm install --save-dev html-webpack-plugin` to install  
This plugin help *webpack* use template.html and generate .html result file.  
Do not need to put a script tag in the html file again!(like <script src="scripts.js"></script>)
- use `touch ./src/template.html` to create [template](./src/template.html) file.
- config webpack.config.js:  
template with notes: [webpack.config.js](./src/webpack.config-with-notes.js)  
template: [webpack.config.js](./src/webpack.config.js)

## 7. Install **css-loader**, **style-loader** and **html-loader**  
the 3 loader help to handle .html and .css files
- use `npm install --save-dev style-loader css-loader` to install both.
- use `npm install --save-dev html-loader` to install.  
- config webpack.config.js:  
template with notes: [webpack.config.js](./src/webpack.config-with-notes.js)  
template: [webpack.config.js](./src/webpack.config.js)

## 8. Build & Run the Project
- use `npx webpack` to see the result anytime
- use `npm install --save-dev webpack-dev-server` to install a online webpack-server to see the web page.
- use terminal command `npx webpack serve` to see the web page anytime.
- config webpack.config.js:  
template with notes: [webpack.config.js](./src/webpack.config-with-notes.js)  
template: [webpack.config.js](./src/webpack.config.js)

## 9. TDD(test driven development)
- use `npm install --save-dev jest` to install **jest**
- config **jest** with ESM:  
  use `npm install --save-dev @babel/preset-env` to install **babel**  
  create a [babel.config.js] file in the root  
- use `mkdir __test__` create a folder to contain all the test file(in the root)
- create [xx.test.js](./src/xx.test.js) files
- run terminal command `npx jest` to see the result anytime

## 10. upload to Github
[The Oding Project guide](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page)
- use `git branch gh-pages` to create a new branch to deploy Github pages.
- use `git checkout gh-pages && git merge main --no-edit` to sync main branch to the new branch before deploy.
- on the new branch, use `npx webpack` to generate latest version of the project.
- use `git add dist -f`, `git commit -m "Deployment commit"`, `git subtree push --prefix dist origin gh-pages` to **force**(since .gitignore already ignore 'dist') and **only push** the dist folder to remote.
- use `git checkout main` to switch back
