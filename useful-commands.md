# Node.js
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
# Docker
- `docker --version`: Checks that Docker is installed and prints the version number.
- `docker container list`: List running containers.
- `docker container list -a`: List all containers(running and stopped)
- `docker image list`: List local images
- `docker build -t <tag> --file <docke-rfile> .`: Builds an image from assets in the current directory according to the instructions in the docker-file   
- `docker run -d -p <host-port>:<container-port> -e <name=value> <tag>`: Instantiates a container from an image. If the image
isn’t available locally, it can be pulled from a remote
registry (assuming the tag specifies the URL of the
registry).
The -d argument runs the container in detached
mode, so it won’t be bound to the terminal and you
won’t see the output. Omit this argument to see
output directly, but this also locks your terminal.
The -p argument allows you to bind a port on the
host to a port in the container. The -e argument allows you to set environment variables.

- `docker logs <container-id>`: Retrieves output from a particular container. You need this to see the output when running a container
in detached mode. 