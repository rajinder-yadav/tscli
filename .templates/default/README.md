# TSCLI - TypeScript Default generated project

Start playing with the demo starter project now, the source code is under the project `src/` sub-folder.

```sh
cli new demo
cd demo
npm start
```

This will perform a clean build and run the demo program. A log will be produced in the `logs/` sub-folder under the project root.

_Note_: If you are using _Yarn_, continue to work with _Yarn_.

## Benefits

Here are the benefits you will enjoy right out of the gate:

* Quick start
* Best practices
* Build system
* Code in TypeScript
* Code TypeScript Modules
* HTML live edit and preview
* Error logging
* Code linting
* Code formatting
* Unit testing
* Code coverage
* Document generation
* Git commit hooks
* Continuous integration (under research)

## TypeScript development

### Source code

Place all TypeScript code under the folder, `src/`, they will be picked up from here and compiled to the, `build/` folder under the project root.

You are free to create addition folder and sub-folder under, `src/`, the compiler will recursively find and compile all TypeScript code.

All TypeScript code in compiled to _ES5_ JavaScript. The target JavaScript code can be changed from the [TypeScript configuration](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) file, `tsconfig.json`.

Some of the things to be controlled are:

* Files to compile
* Folders to include
* Folders to exclude
* Target compiled output
* Source map (Needed for debugging)
* Module system (Use commonjs for Node)
* Output file

Supported compiled targets include: `ES3, ES5, ES6, ES2016, ES2017`

See [compiler options](https://www.typescriptlang.org/docs/handbook/compiler-options.html) for more details.

_Note_: If you are using _Yarn_ over _NPM_, continue to work with _Yarn_, the TSCLI generated project will use Yarn before NPM if it is available on your system.

### Building

To compile the TypeScript code, use the following command to start the build process:

```sh
npm run build
```

### Warning

The `build/` folder and all sub-folders within it will be deleted to insure a clean build is performed each time. Do not place any files you will need later in the `build/` folder.

### Running and watching during development

You can also continue to watch and run a NodeJS based program during development. To do this open 2 terminals. The first will be used as the build terminal, and the second will be used to run the compiled NodeJS code.

#### Terminal One

This will run the build in watch mode.

```sh
npm run dev
```

Wait for the build to complete before issuing the next command.

#### Terminal Two

This will run the NodeJS whenever new files are copied into the `build/` folder.

```sh
npm run devwatch
```

There is a delay added before the NodeJS program is executed, this is to prevent premature re-running of code if multiple files are being copied to the `build/` folder. You can change the delay from the `devwatch` script (see file`package.json`) by altering the value passed using the `--delay-start` switch.

### Library code (Modules)

Place any module or library source code that you write under the, `src/lib/`, sub-folder. The compiled source code will be output to the, `build/lib/`, sub-folder.

### Formatting the code

It is good practice to format the source code, so it conforms to a uniform structure. Avoid squabbles about style. To format the TypeScript code, type:

```sh
npm run format
```

_Note_: When the _TSCLI_ generated project is built, the source code will be automatically formatted. This will also happen before source code is committed to _Git_.

### Linting

To validate the project TypeScript source code, use the following command:

```sh
npm run check
```

_Note_: The TypeScript source code is run through a linter (_TSLint_) before a build and before it is committed to the Git repository. Any errors encountered must be fixed before the Git commit is allowed to proceed.

### Testing

Testing is done using _Tap_, the [test methods](http://localhost:3001/) are simple and easy to learn.

_Tap_ makes testing simple. Code is easy to read since it is just JavaScript, this avoids the need to context switch to BDD syntax. Plus anyone who knows JavaScript will be able to write test code immediately.

I firmly believe less time should be put into writing test code and having more time to write production code. Tap delivers on this by keeping the setup and test writing to a bare minimum. I believe _Tap_ is the best option for writing unit test for JavaScript based code.

The test code should be _co-located_ with the production source code. As a best practice, place tests under a sub-folder called `test/`.

Pay attention to how the test source file is named: `test.<file>.ts`. So if you have a file called, `filter.ts`, the test file should be named, `test.filter.ts`.

To run the test, type:

```sh
npm test
```

_Note_: Running the test will cause a fresh build to be kicked-off. Once the build finishes, all the unit tests will be run.


## Test coverage

Test coverage is done when testing is run using `nyc`. The test coverage result is displayed to the console after the results of the unit tests. A folder called `coverage/` will be created under the project root. It will hold the results of the code coverage from the test run. Of interest to you will by the HTML report which is a nice way to see what code was covered and what code was not by the unit tests.

To configure the test coverage, make changes to the `nyc` settings found in the file `package.json`.

## Static Web development

If you want to hack around with HTML, CSS and try things out quick. Start the project in _web_ mode using the following command:

```sh
npm run web
```

This will run the build first and then open a web browser on port 3000, and load the HTML page, `index.html` located in the `src/` sub-folder.

Any changes made to `index.html` will automatically update and browser on save. You do not need to keep hitting _refresh_ on the browser.

The website uses _Browsersync_ to run a local development web-server and keeps all browsers listening to it in sync. This means it is possible to have multiple browsers listening to the server.

On how to configure the setup, read the [Browsersync options](https://browsersync.io/docs/options).

Basic configurations setting you may be interested in are:

* files
* server
* proxy
* logLevel
* port

The default Browsersync UI web address is: `http://localhost:3001/`.

### Browsersync Asset fetching

With Browsersync, having to serve addition CSS and JavaScript files, make sure to add their path in routes. Something similar to like this:

```js
  "server": {
    baseDir: "src",
    routes: {
      "/node_modules/tachyons/css":"node_modules/tachyons/css"
    }
```

This will allow including `<script>` assets from the index.html file like this:

```html
<head>
  <link rel="stylesheet" href="./node_modules/tachyons/css/tachyons.min.css">
  <script src="../node_modules/zone.js/dist/zone.js"></script>
  <script src="../node_modules/zone.js/dist/long-stack-trace-zone.js"></script>
</head>
```

## Coding guideline

This is the _coding guideline_ followed on the TSCLI project, you may find it helpful with your projects.

Read the [coding guideline](https://github.com/rajinder-yadav/tscli/wiki/Coding-guideline) found in the wiki.

### Generated folder structure

```pre
project-root/
+-www/
+-build/
+-bin/
+-docs/
+-vendor/
+-src/
  +-index.html
  +-test/
  +-lib/
    +-test/
+-assets/
  +-public/
  +-fonts/
  +-img/
+-styles/
  +-css/
+-logs/
+-data/
```
