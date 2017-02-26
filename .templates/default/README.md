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

### Building

To compile the TypeScript code, use the following command to start the build process:

```
npm run build
```

**Warning** - The `build/` folder and all sub-folders within it will be deleted to insure a clean build is performed each time. Do not place any files you will need later!

### Library code (Modules)

Place any module or library source code that you write under the, `src/lib/`, sub-folder. The compiled source code will be output to the, `build/lib/`, folder.

### Formatting the code

It is good practice to format the source code, so it conforms to a uniform structure. Avoid squabbles about style. To format the TypeScript code, type:

```sh
npm run format
```

_Note_: When the code is built and before it is committed to Git, it will be automatically formatted.

### Linting

To validate the TypeScript source code, use the following command:

```sh
npm run check
```

_Note_: The TypeScript code is run through the linter before a build and before it is committed to the Git repository. Any errors encountered must be fixed before the Git commit is allowed to proceed.

### Testing

Testing is done use _Tape_, the [test methods](http://localhost:3001/) are simple and easy to learn.

_Tape_ makes testing simple. Code is easy to read since it is just JavaScript, since there is no context switching to BDD syntax. Plus anyone who knows JavaScript will be able to write test code immediately.

Moreover less time should be put into writing test, and more time allowed for development coding. I believe _Tape_ is the best option for writing unit test for TypeScript code.

The test code should be _co-located_ with the source being tested. As a best practice, place test under a sub-folder called `test/`.

Pay attention to how the test source file is named: `test.<file>.ts`, so if you have a file called, `filter.ts`, the test file should be named, `test.filter.ts`.

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

This will open a web browser on port 3000, and load the HTML page, `index.html` from the `src/` folder.

Any changes made to `index.html` will automatically update and browser, you don not need to keep hitting _refresh_ on the browser.

The website uses _Browsersync_ to run a local development web-server and keep all browsers listening to it in sync. This means it is possible to have multiple browsers listening to the server.

For how to configure the setup, read the [Browsersync options](https://browsersync.io/docs/options).

Basic configurations you might be interested in are:

* files
* server
* proxy
* logLevel
* port

The default Browsersync UI web address is: `http://localhost:3001/`

## Coding guideline

This is the _coding guideline_ followed on the TSCLI project, you may find it helpful with your projects.

Read the [coding guideline](https://github.com/rajinder-yadav/tscli/wiki/Coding-guideline) found in the wiki.

