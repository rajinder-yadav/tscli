"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sh = require("shelljs");
const path = require("path");
const data_types_1 = require("../data-types/data-types");
const commit_message = `
_________ _______  _______  _       _________
\\__   __/(  ____ \\(  ____ \\( \\      \\__   __/
   ) (   | (    \\/| (    \\/| (         ) (
   | |   | (_____ | |      | |         | |
   | |   (_____  )| |      | |         | |
   | |         ) || |      | |         | |
   | |   /\\____) || (____/\\| (____/\\___) (___
   )_(   \\_______)(_______/(_______/\\_______/

This Project was generated using TSCLI (${data_types_1.VERSION}).
Initial Commit.
`;
function createNewProject(cmd, options) {
    console.log("TSCLI is generating a new ");
    if (typeof cmd.type === "undefined") {
        console.log("default project...");
        sh.cp("-r", path.resolve(__dirname, "../../.templates/default/"), `${options.project}`);
        sh.pushd(`${options.project}`);
        sh.mkdir("-p", "./docs", "./logs");
        sh.exec("git init");
        sh.exec("git add -A");
        sh.exec(`git commit -q -m "${commit_message}"`);
        sh.exec("git checkout -b dev");
        if (data_types_1.YARN) {
            sh.exec("yarn");
        }
        else {
            sh.exec("npm install");
        }
        sh.popd();
        console.log("Project created successfully.");
    }
}
exports.createNewProject = createNewProject;
//# sourceMappingURL=create-new-project.js.map