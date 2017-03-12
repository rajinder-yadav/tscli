# TSCLI Change Log

All changes to this project will be recorded in this document.

## 0.1.2-alpha-4 (2017)

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
