"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sh = require("shelljs");
const path = require("path");
const data_types_1 = require("../data-types/data-types");
function createNewProject(cmd, options) {
    console.log("TSCLI is generating a new ");
    if (typeof cmd.type === "undefined") {
        console.log("default project...");
        sh.cp("-r", path.resolve(__dirname, "../../.templates/default/"), `${options.project}`);
        sh.pushd(`${options.project}`);
        sh.mkdir("-p", "./docs", "./logs");
        sh.exec("git init");
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