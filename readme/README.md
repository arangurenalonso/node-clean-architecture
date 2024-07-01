# dev

1. Clonar el archivo env.template a .env
2. Configurar las varaibles de entorno

```
PORT=3000

MAILER_EMAIL=
MAILER_SECRET_KEY=

PROD=false
```

3. Recontruir los paquetes de node

```
npm i
```

4. Ejecutar el proyecto

```
npm run dev
```

# Configurar El ambiente de desarrollo

0. Curiosidades acerca de Node

- Cada archivo de node es un modulo; es decir un objeto encapsulado
- Hay 2 tipos de dependencias en el proyecto:
  - dependencies: dependencias necesarias para que nuestro proyecto funcione;
    solo estas dependencias terminan llegando al ambiente de producción
  - devDependencies: Son dependencias que solo se van a ejecutar en desarrollo
    no en producción
- El package-lock.json; nos dice como fue construido nuestro arbol de
  dependencias y asegura que todas las personas que trabajen el el proyecto
  utilizen las mismas dependencias

1. Inicializar el proyecto de Node

```
npm init
npm init -y
```

Definir lo siguiente

- name: Nombre del proyecto
- version: La versión de tu proyecto, normalmente comenzando por 1.0.0 a menos
  que tengas una razón para empezar con una diferente
- description: Una breve descripción de lo que hace tu proyecto.
- entry point: El archivo principal de tu proyecto, por defecto es index.js.
  Puedes cambiarlo si tu archivo principal tiene otro nombre.
- test command: El comando que se utilizará para ejecutar tus pruebas. Por
  ejemplo, si estás utilizando Jest, podrías usar jest o configurarlo más tarde
  en este mismo archivo
- git repository: Defino el repositorio de git donde se puede encontrar mas
  información del aplicativo
- keywords: Palabras claves para que nuestros paquetes sean facilmente
  encontrados
- author: Tu nombre o el de tu organización, así como otros detalles opcionales
  como el correo electrónico.
- license: La licencia bajo la cual se distribuye tu proyecto, por ejemplo, MIT.

2. Definir scripts

- Los scrips se definen en el apartado script del package.json
  - Se definen scripts para las diferentes ejecuciones que se desea hacer como:
    producción (start), desarrollo (dev), testing (test), etc
  - Para ejecutar los script se realiza de la siguiente manera
  ```
  npm run <nombre_script>
  ```
  - En el caso de start tambien se puede ejecutar de la siguiente manera; ya que
    usualmente es el comando que levanta la aplicación en producción
  ```
  npm run start
  ```

Visualización

```
  "scripts": {
    "dev": "nodemon src/app.js",
    "start": "node src/app.js"
  },

```

2. Packetes a instalar

   1. Nodemon

   - restarting the node application when file changes in the directory are
     detected

   ```
   npm install -D nodemon
   npm install --save-dev nodemon
   ```

   2. winston

   - winston is designed to be a simple and universal logging library with
     support for multiple transports. A transport is essentially a storage
     device for your logs

   ```
    npm i winston
   ```

   3. typescript + Nodemon

      1. Install TypeScript and Node Definition Files

      ```
      npm i -D typescript @types/node ts-node nodemon rimraf
      ```

      - typescript: A strongly typed programming language that builds on
        JavaScript, providing better tooling at any scale.
      - @types/node: TypeScript definitions for Node.js, which help with
        type-checking and code autocompletion for Node.js APIs.
      - ts-node: A TypeScript execution engine and REPL for Node.js, which
        allows you to run TypeScript code directly.
      - nodemon: A utility that monitors for any changes in your source and
        automatically restarts your server. Perfect for development.
      - rimraf: A Node.js package used to delete files and directories. It is a
        cross-platform tool to remove directories.

      2. Initialize TypeScript and Define Configuration

      ```
      npx tsc --init --outDir dist/ --rootDir src
      ```

      - outDir: Specify an output folder for all emitted files
        - This folder will contain all the transpiled project files. By
          convention, it is called the dist folder, which stands for
          distribution. This folder will ultimately contain the final
          application product.
      - rootDir: Specify the root folder of your source files that TypeScript
        will check.
      - Configure the tsconfig.json
        - Add the following code to the tsconfig.json file created in the
          previous step:

      ```
      "exclude": ["node_modules", "dist"],
      "include": ["src"]
      ```

      - exclude: List of directories or files to exclude from compilation.
      - include: List of directories or files to include in compilation.

      3. Create the file nodemon.json

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

      4. add script to the package.json

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

      5. Stablish the file sysmten

      ```
      src/
      │
      └── app.ts
      ```

   4. typescript + TS-Node-Dev

      1. Install packages

      ```
      npm i -D typescript @types/node ts-node ts-node-dev rimraf
      ```

      - ts-node-dev: It restarts target node process when any of required files
        changes (as standard node-dev) but shares Typescript compilation process
        between restarts. This significantly increases speed of restarting
        comparing to node-dev -r ts-node/register ..., nodemon -x ts-node.

      2. Initialize TypeScript and Define Configuration

      ```
      npx tsc --init --outDir dist/ --rootDir src
      ```

      - Configure the tsconfig.json

        - Add the following code to the tsconfig.json file created in the
          previous step:

          ```
          "exclude": ["node_modules", "dist"],
          "include": ["src"]
          ```

      3. add script to the package.json

      ```
      "scripts": {
        "dev": "tsnd --respawn --clear src/app.ts",
        "build": "rimraf ./dist && tsc",
        "start": "npm run build && node dist/app.js"
      },
      ```

      4. Stablish the file sysmten

      ```
      src/
      │
      └── app.ts
      ```

   5. Job Triggers

   - Crom execute a function whenever your scheduled job triggers

     ```
     npm i cron
     ```

   6. Variables de entorno

   - dotenv.

     ```
     npm install dotenv
     npm install env-var
     ```

     - dotenv: sirver para....
     - env-var: sirve para

     1. Configurar Variables de entorno

   7. Enviar Mail

   - nodemailer.

     ```
     npm install nodemailer
     npm i --save-dev @types/nodemailer
     ```

     - nodemailer:Using the email accounts registered with EmailEngine, you can
       receive and send emails.

   8. Base de datos no relacional.

   ```
   npm install mongoose
   ```

   - mongoose:Trabajar con Base de datos mongo .

   9. Base de datos relacional.

   ```
   npm install prisma --save-dev
   npx prisma init --datasource-provider PostgreSQL
   ```

   - mongoose:Trabajar con Base de datos mongo .

   8. To work with console applications

   - Yargs helps you build interactive command line tools, by parsing arguments
     and generating an elegant user interface.

     ```
     npm i yargs
     npm i @types/yargs --save-dev
     ```

3.
4.
5.
6. .
