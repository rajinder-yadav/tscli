#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cmd = require("commander");
const create_new_project_1 = require("./commands/create-new-project");
let options = {};
cmd
    .version("0.1.2-alpha.3")
    .usage("<command> <project> [options...]")
    .arguments("<command> <project>")
    .option("-t, --type <type>", "Project types: {blank(defautl)|node|web|angular}")
    .action((command, project) => {
    Object.assign(options, { command, project });
})
    .parse(process.argv);
switch (options.command) {
    case "new":
        create_new_project_1.createNewProject(cmd, options);
        break;
    default:
        console.log("Unknown command, doing nothing!");
}
//# sourceMappingURL=main.js.map