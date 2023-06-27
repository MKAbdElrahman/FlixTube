
- `node --version`: Checks that Node.js is installed; prints the version number.
- `npm init -y`: Creates a default Node.js project with a stub for our package.json, the file that tracks metadata and dependencies for our Node.js project.
- `npm install --save <package-name>`: Installs an npm package. There are many other packages available on npm, and you can install any by inserting a specific package name.
- `npm install`: Installs all dependencies for a Node.js project that have been recorded in package.json.
- `node <script-file>`: Runs a Node.js script file. We invoke the node command and give it the name of our script file as an argument. You can call your script main.js or server.js if you want, but it’s probably best to stick to the convention and just call it index.js.

- `npm start`: The conventional npm script for starting a Node.js application
regardless of what name the main script file has or what command-line parameters it expects.  Typically this translates into node index.js in the package.json file, but it depends on the author of the project and how they have set it up. The nice thing is that no matter how a particular
project is structured, you only have to remember npm start.


- `npm start:dev`: My personal convention for starting a Node.js project in
development. I add this to the scripts in package.json. Typically, it runs something like nodemon to enable live reload of your code as you work on it.