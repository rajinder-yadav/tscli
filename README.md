![Travis](https://img.shields.io/travis/rajinder-yadav/tscli.svg)
![Dependencies](https://david-dm.org/rajinder-yadav/tscli.svg)
![Version](https://img.shields.io/badge/TSCLI-0.1.2--alpha.9-blue.svg)
![License](https://img.shields.io/badge/license-GPL--3.0-blue.svg)
# TSCLI - TypeScript Project creator

![Image Logo](img/tscli.png)

The _TSCLI_ project is in the process of becoming a general purpose CLI project generator for TypeScript based code.

Emphasis is put into encouraging the use of best practices and the best tools. I expect things to evolve overtime and settle to something the general practitioner will be happy with.

Currently the _TSCLI_ default project template is being used to solidify concepts and setup.

## Installing TSCLI

```sh
npm install -g tscli
```

## Creating a Project

Start playing with the demo starter project now, the source code is under the project `src/` sub-folder.

```sh
cli new demo
cd demo
npm start
```

This will perform a clean build and run the demo program. A log will be produced in the `logs/` sub-folder under the project root.

_Note_: If you are using _Yarn_ over _NPM_, continue to work with _Yarn_.

## Benefits

Here are the benefits you will enjoy right out of the gate:

* Quick start
* Best Practices
* Build system
* Code in TypeScript
* Code TypeScript Modules
* HTML live edit and preview
* Error logging
* Code Linting
* Code Formatting
* Document Generation
* Git commit hooks
* Continuous integration (under research)

## TypeScript development

### Source code

Place all TypeScript source code under the folder, `src/`, they will be picked up from here and compiled to the, `build/` folder under the project root.

You are free to create addition folders and sub-folders under, `src/`, the compiler will recursively find and compile all TypeScript code.

All TypeScript code in compiled to _ES5_ JavaScript. The target JavaScript code can be changed from the [TypeScript configuration](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) file, `tsconfig.json`.

Some of the things you may want to configure:

* Files to compile
* Folders to include
* Folders to exclude
* Target compiled output
* Source map (Needed for debugging)
* Module system (Use commonjs for Node)
* Output file

Supported compiled targets include: `ES3, ES5, ES6, ES2016, ES2017`.

See [compiler options](https://www.typescriptlang.org/docs/handbook/compiler-options.html) for more details.

### Building

To compile the TypeScript code, use the following command to start the build process:

```sh
npm run build
```

### Warning

The `build/` folder and all sub-folders within it will be deleted to insure a clean build is performed each time. Do not place any files you will need later in the `build/` folder.

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

Testing is done using _Tape_, the [test methods](http://localhost:3001/) are simple and easy to learn.

_Tape_ makes testing simple. Code is easy to read since it is just JavaScript, this avoids the need to context switch to BDD syntax. Plus anyone who knows JavaScript will be able to write test code immediately.

I firmly believe less time should be put into writing test code and having more time to write production code. Tape delivers on this by keeping the setup and test writing to a bare minimum. I believe _Tape_ is the best option for writing unit test for JavaScript based code.

The test code should be _co-located_ with the production source code. As a best practice, place tests under a sub-folder called `test/`.

Pay attention to how the test source file is named: `test.<file>.ts`. So if you have a file called, `filter.ts`, the test file should be named, `test.filter.ts`.

To run the test, type:

```sh
npm test
```

_Note_: Running the test will cause a fresh build to be kicked-off. Once the build finishes, all the unit tests will be run.

## Static Web development

If you want to hack around with HTML, CSS and try things out quick. Start the project in _web_ mode using the following command:

```sh
npm run web
```

This will open a web browser on port 3000, and load the HTML page, `index.html` located in the `src/` sub-folder.

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

## Create a NodeJS JavaScript project

If you want to develop in plain JavaScript, or develop a ES6 NodeJS based project, this is now supported. It's also good for quickly testing out code and not getting slowed down by the compile step.

You will need the latest version of NodeJS for ES6 and beyond support, otherwise plain JavaScript will continue to work.

```sh
cli new demo --type js
npm install
```

_Note_: You may also use `-t` which is the short-form for `--type`.

The following NPM commands are supported:

NPM script|Description
----------|-----------
check|Run code through linter (jslint).|
dev|Run in watch mode.|
doc|Generate doc files (jsdocs).|
format|Format the source code.|
node:debug|Start debugger, requires Chrome.|
start|Run the NodeJS program.|
test|Run Unit testing (tape).|

The plain JavaScript generated file has a development mode. It will run the _Entry_ file (`main.js`) using NodeJS each time the source code is updated. You can develop and see the output from the _terminal_ to test out code quickly.

```sh
npm run dev
```

## Contributors Wanted

I am open to help and learn from the community. Feel free to create a PR, reach out to me to discuss ideas, and help out with this project.

If you have never done a commit before, have no idea what a PR is, do not worry. I am open to help first timers :)

## Where to start

Not sure where to get started. Here are two suggested starting points:

1. Start by looking at open issues to fix.
1. Look at [Launchpad](https://tree.taiga.io/project/rajinder-yadav-launchpad/kanban?kanban-status=1068326) project tasks for things to help out with.

### Issues

If you know your way around, look for issues marked, _help wanted_.

If you are someone new to helping out on a Open Source project, look for something really easy to get your feet wet.

## Coding guideline

Read the [coding guideline](https://github.com/rajinder-yadav/tscli/wiki/Coding-guideline) found in the wiki.
