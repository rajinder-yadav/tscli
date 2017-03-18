# TSCLI Change Log

All changes to this project will be recorded in this document.

## 0.1.2-alpha-14 (2017-03-17)

* Added project creation for Node.js
* Added Greenkeeper support to project.

## 0.1.2-alpha-13 (2017-03-16)

* New rules added to tslint.
* Update NPM packages.
* Removed postweb NPM script from default project.

## 0.1.2-alpha-12 (2017-03-14)

* Deleted a console debug.
* Minor README update.

## 0.1.2-alpha-11 (2017-03-14)

* Changed how dev-watch mode works for default template.
* Fixed how web-watch NPM script for default template.
* Removed `predev` script from template for JavaScript.
* Update README in default template.

## 0.1.2-alpha-10 (2017-03-13)

* Alpha release version bump.

## 0.1.2-alpha-9 (2017-03-13)

* Delete .npmignore file, causing problem with generated project.

## 0.1.2-alpha-8 (2017-03-13)

* Fixed JavaScript project dev script.

## 0.1.2-alpha-7 (2017-03-12)

* Cleaned project .gitignore files
* Added support for JavaScript NodeJS project creation

The JavaScript NodeJS support speeds up the dev process, specially if you want to try our code quickly. This is done by skipping the compile step and using Nodejs ES6 language support. You will still need to use NodeJS `require` to import files as well as NodeJS modules.

## 0.1.2-alpha-5 (2017-03-11)

* Fix NPM error of missing depedency.
* New logo image added to README.
* README corrections.

## 0.1.2-alpha-4 (2017-03-11)

* Cleaned up NPM scripts.
* Silenced inital generated commit.

* Doc output folder is a config setting, `doc_folder`.
* The entry file for `npm start` is a config setting, `main`.

```js
  "config": {
    "main": "build/main.js",
    "doc_folder": "docs/typedoc"
  },
```

* Fixed NPM scripts to correctly use Node's recurse folder syntax.
* Fixed Web script, now servers from build folders and copies over file, `index.html`.
* Fixed missing `<head>` tag in file, `index.html`.
* Updated README with sub-sction on Browsersync, setting up asset serving.
* Update NPM package modules.

## 0.1.2-alpha.3 (2017-02-26)

* Fixed issues in generated app throwing an error, since the `log/` folder not created.

## 0.1.2-alpha.2 (2017-02-26)

* Fixed version number, displayed when typing, `cli -V`.

## 0.1.2-alpha.1 (2017-02-26)

* Deleted project starter kit.
* Added _default_ project template.
* The TSCLI command is called, `cli`. It now generates a default TypeScript demo project.

To create a new project, from the terminal use the command:

```sh
cli new <project-name>
```

See README in generated project for additional details.

## 0.1.1 (2017-02-23)

* New scripts
  1. Git hooks
  1. Static web dev using Browsersync

* Removed `.gitignore` entry.
* Update demo code, `main.ts` with logging.
* Update README.
* Moved `test.utils.ts` file, co-located with file being tested.
* Added `yarn.lock` file.
* Added configuration file for Browsersync.
* Added static HTML file, `index.html` as a template.

## 0.1.0 (2017-02-23)

* Initial project commit.

This is evolving project structure which will be used as a template for TypeScript project generation using the TSCLI tools.

Please see README for details on this project.
