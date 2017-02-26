#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sh = require("shelljs");
const cmd = require("commander");
const path = require("path");
const YARN = sh.which("yarn");
let options = {};
cmd
    .version("0.1.2-alpha.2")
    .usage("<command> <project> [options...]")
    .arguments("<command> <project>")
    .option("-t, --type <type>", "Project types: {blank(defautl)|node|web|angular}")
    .action((command, project) => {
    Object.assign(options, { command, project });
})
    .parse(process.argv);
switch (options.command) {
    case "new":
        createNewProject(cmd, options);
        break;
    default:
        console.log("Unknown command, doing nothing!");
}
function createNewProject(cmd, options) {
    console.log("TSCLI is generating a new ");
    if (typeof cmd.type === "undefined") {
        console.log("default project...");
        sh.cp("-r", path.resolve(__dirname, "../.templates/default/"), `${options.project}`);
        sh.pushd(`${options.project}`);
        sh.exec("git init");
        if (YARN) {
            sh.exec("yarn");
        }
        else {
            sh.exec("npm install");
        }
        sh.popd();
        console.log("Project created successfully.");
    }
}
