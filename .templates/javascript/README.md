# TSCLI - JavaScript (ES6) Node generated project

Start playing with the Node.js demo starter project, the source code is under the project `src/` sub-folder.

If you want to test out JavaScript (ES6) code without the compiler step, this is the fastest way to go. The project will however use Node.js modules as well as Node.js `require` to import files.

```sh
npm install
npm start
```

_Note_: If you are using _Yarn_, continue to work with _Yarn_.

## Benefits

Here are the benefits you will enjoy right out of the gate:

* Quick start
* Best practices
* Build system
* Error logging
* Code linting
* Code formatting
* Unit testing
* Code coverage
* Document generation
* Git commit hooks
* Continuous integration (under research)

## JavaScript development

### Source code

Place all JavaScript code under the folder, `src/`, they will be picked up from here and compiled to the, `build/` folder under the project root.

You are free to create addition folder and sub-folder under, `src/`, the compiler will recursively find and compile all JavaScript code.

All JavaScript code in run as _ES6_ through Node.js, make sure you're working with the latest version of Node.js.

### Running

To run the JavaScript code, use the following command:

```sh
npm start
```

You can also run the in watch mode with:

```sh
npm run dev
```

### Debugging

You can debug your JavaScript code easily with:

```sh
npm run node:debug
```

Paste the link displayed in the terminal into the Chrome browser, this will only work in Chrome. The code will halt in the main entry, this will allow you to set addition breakpoints before continuing execution of the program.

To exit debug mode, you will need to close the Browser (tab).

### Library code (Modules)

Place any module or library source code that you write under the, `src/lib/`, sub-folder. The compiled source code will be output to the, `build/lib/`, folder.

### Formatting the code

It is good practice to format the source code, so it conforms to a uniform structure. Avoid squabbles about style. To format the JavaScript code, type:

```sh
npm run format
```

_Note_: When the code is built and before it is committed to Git, it will be automatically formatted.

### Linting

To validate the JavaScript source code, use the following command:

```sh
npm run check
```

_Note_: The JavaScript code is run through the linter before a build and before it is committed to the Git repository. Any errors encountered must be fixed before the Git commit is allowed to proceed.

### Testing

Testing is done use _Tap_, the [test methods](http://localhost:3001/) are simple and easy to learn.

_Tap_ makes testing simple. Code is easy to read since it is just JavaScript, since there is no context switching to BDD syntax. Plus anyone who knows JavaScript will be able to write test code immediately.

Moreover less time should be put into writing test, and more time allowed for development coding. I believe _Tap_ is the best option for writing unit test for JavaScript code.

The test code should be _co-located_ with the source being tested. As a best practice, place test under a sub-folder called `test/`.

Pay attention to how the test source file is named: `test.<file>.ts`, so if you have a file called, `filter.ts`, the test file should be named, `test.filter.ts`.

To run the test, type:

```sh
npm test
```

## Test coverage

Test coverage is done when testing is run using `nyc`. The test coverage result is displayed to the console after the results of the unit tests. A folder called `coverage/` will be created under the project root. It will hold the results of the code coverage from the test run. Of interest to you will by the HTML report which is a nice way to see what code was covered and what code was not by the unit tests.

To configure the test coverage, make changes to the `nyc` settings found in the file `package.json`.

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

## Document generation

Docs can be generated using the following command.

```sh
npm run doc
```

[ESDoc](https://esdoc.org/) is used to generate the docs, for more info see the main site.

* [Writting tags](https://esdoc.org/manual/tags.html)
