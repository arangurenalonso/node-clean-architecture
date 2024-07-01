# typescript + Nodemon

---

## Initialize node

```
npm init -y
```

## Install TypeScript and Node Definition Files

```
npm i -D typescript @types/node ts-node nodemon rimraf
```

- typescript: A strongly typed programming language that builds on JavaScript,
  providing better tooling at any scale.
- @types/node: TypeScript definitions for Node.js, which help with type-checking
  and code autocompletion for Node.js APIs.
- ts-node: A TypeScript execution engine and REPL for Node.js, which allows you
  to run TypeScript code directly.
- nodemon: A utility that monitors for any changes in your source and
  automatically restarts your server. Perfect for development.
- rimraf: A Node.js package used to delete files and directories. It is a
  cross-platform tool to remove directories.

## Initialize TypeScript and Define Configuration

```
npx tsc --init --outDir dist/ --rootDir src --experimentalDecorators true  --emitDecoratorMetadata true
```

- outDir: Specify an output folder for all emitted files
  - This folder will contain all the transpiled project files. By convention, it
    is called the dist folder, which stands for distribution. This folder will
    ultimately contain the final application product.
- rootDir: Specify the root folder of your source files that TypeScript will
  check.
- Configure the tsconfig.json
  - Add the following code to the tsconfig.json file created in the previous
    step:
- experimentalDecorators: true
  - Enable experimental support for legacy experimental decorators
- emitDecoratorMetadata: true
  - Emit design-type metadata for decorated declarations in source files

```
"exclude": ["node_modules", "dist"],
"include": ["src"]
```

- exclude: List of directories or files to exclude from compilation.
- include: List of directories or files to include in compilation.

## Configuration

1. Create the file nodemon.json

```
{
  "watch": ["src"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "npx ts-node ./src/app.ts"
}
```

- watch: List of directories to watch for changes.
- ext: File extensions to monitor.
- ignore: List of paths to ignore.
- exec: Command to execute when a file change is detected

2. add script to the package.json

```
"scripts": {
  "dev": "ts-node src/app.ts",
  "dev:nodemon": "nodemon",
  "build": "rimraf ./dist && tsc",
  "start": "npm run build && node dist/app.js"
},
```

- dev: Script to start the application in development mode using Nodemon
- build: Script to clean the dist folder and compile TypeScript files.
  - rimraf ./dist: Deletes the dist directory.
  - tsc: Compiles the TypeScript code.
- start: Script to build the project and start the application.
  - npm run build: Runs the build script.
  - node dist/app.js: Runs the compiled JavaScript application.

3. Stablish the file sysmten

```
src/
│
└── app.ts
```

# typescript + TS-Node-Dev

---

## Initialize node

```
npm init -y
```

## Install packages

```
npm i -D typescript @types/node ts-node ts-node-dev rimraf
```

- ts-node-dev: It restarts target node process when any of required files
  changes (as standard node-dev) but shares Typescript compilation process
  between restarts. This significantly increases speed of restarting comparing
  to node-dev -r ts-node/register ..., nodemon -x ts-node.

## Initialize TypeScript and Define Configuration

```

npx tsc --init --outDir dist/ --rootDir src --experimentalDecorators true  --emitDecoratorMetadata true
```

- Configure the tsconfig.json
  - Add the following code to the tsconfig.json file created in the previous
    step:
    ```
    "exclude": ["node_modules", "dist"],
    "include": ["src"]
    ```

## Configuration

1. add script to the package.json

```
"scripts": {
  "dev": "tsnd --respawn --clear src/app.ts",
  "build": "rimraf ./dist && tsc",
  "start": "npm run build && node dist/app.js"
},
```

2. Stablish the file sysmten

```
src/
│
└── app.ts
```

# para configurar rutas

1. instalar packetes

```
npm i tsc-alias tsconfig-paths --save-dev
```

2. Agregar los paths

```
    "baseUrl": "./",
    "paths": {
      "@application/*": ["src/core/application/*"],
      "@infrastructure/*": ["src/infrastructure/*"],
      "@domain/*": ["src/core/domain/*"],
      "@presentation/*": ["src/presentation/*"],
      "@config/*": ["src/config/*"]
    },
```

3. Cambiar los scripts

```

  "scripts": {
    "clean": "rimraf dist cache",
    "dev": "tsnd -r tsconfig-paths/register --respawn --clear src/app.ts",
    "build": "npm run clean && tsc && tsc-alias -p tsconfig.json",
    "start": "npm run build && node dist/app.js"
  },
```
