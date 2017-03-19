"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sh = require("shelljs");
const path = require("path");
const fs = require("fs");
const data_types_1 = require("../data-types/data-types");
const commit_message = `
This Project was generated using TSCLI (${data_types_1.VERSION}).
_________ _______  _______  _       _________
\\__   __/(  ____ \\(  ____ \\( \\      \\__   __/
   ) (   | (    \\/| (    \\/| (         ) (
   | |   | (_____ | |      | |         | |
   | |   (_____  )| |      | |         | |
   | |         ) || |      | |         | |
   | |   /\\____) || (____/\\| (____/\\___) (___
   )_(   \\_______)(_______/(_______/\\_______/

Initial Commit.
`;
function createNewProject(cmd, options) {
    if (fs.existsSync(options.project)) {
        console.log(`Folder ${options.project} already exists!`);
        return;
    }
    if (typeof cmd.type === "undefined" || cmd.type === "default") {
        console.log("TSCLI is generating a new default project...");
        sh.cp("-r", path.resolve(__dirname, "../../.templates/default/"), `${options.project}`);
    }
    else if (cmd.type === "node") {
        console.log("TSCLI is generating a new Node.js project...");
        sh.cp("-r", path.resolve(__dirname, "../../.templates/node/"), `${options.project}`);
    }
    else if (cmd.type === "js") {
        console.log("TSCLI is generating a new JavaScript project...");
        sh.cp("-r", path.resolve(__dirname, "../../.templates/javascript/"), `${options.project}`);
    }
    sh.pushd(`${options.project}`);
    sh.mkdir("./docs", "./logs");
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
    console.log(`Project ${options.project} created successfully.`);
}
exports.createNewProject = createNewProject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLW5ldy1wcm9qZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL2NyZWF0ZS1uZXctcHJvamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhCQUE4QjtBQUM5Qiw2QkFBNkI7QUFDN0IseUJBQXlCO0FBRXpCLHlEQUF5RDtBQUV6RCxNQUFNLGNBQWMsR0FBVzswQ0FDWSxvQkFBUTs7Ozs7Ozs7Ozs7Q0FXbEQsQ0FBQztBQUVGLDBCQUFrQyxHQUFRLEVBQUUsT0FBWTtJQUV0RCxFQUFFLENBQUMsQ0FBRSxFQUFFLENBQUMsVUFBVSxDQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBRSxVQUFXLE9BQU8sQ0FBQyxPQUFRLGtCQUFrQixDQUFFLENBQUM7UUFDN0QsTUFBTSxDQUFDO0lBQ1QsQ0FBQztJQUVELEVBQUUsQ0FBQyxDQUFFLE9BQU8sR0FBRyxDQUFDLElBQUksS0FBSyxXQUFXLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxTQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLE9BQU8sQ0FBQyxHQUFHLENBQUUsOENBQThDLENBQUUsQ0FBQztRQUM5RCxFQUFFLENBQUMsRUFBRSxDQUFFLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFFLFNBQVMsRUFBRSwyQkFBMkIsQ0FBRSxFQUFFLEdBQUksT0FBTyxDQUFDLE9BQVEsRUFBRSxDQUFFLENBQUM7SUFDaEcsQ0FBQztJQUNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsSUFBSSxLQUFLLE1BQU8sQ0FBQyxDQUFDLENBQUM7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBRSw4Q0FBOEMsQ0FBRSxDQUFDO1FBQzlELEVBQUUsQ0FBQyxFQUFFLENBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUUsU0FBUyxFQUFFLHdCQUF3QixDQUFFLEVBQUUsR0FBSSxPQUFPLENBQUMsT0FBUSxFQUFFLENBQUUsQ0FBQztJQUM3RixDQUFDO0lBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFFLEdBQUcsQ0FBQyxJQUFJLEtBQUssSUFBSyxDQUFDLENBQUMsQ0FBQztRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFFLGlEQUFpRCxDQUFFLENBQUM7UUFDakUsRUFBRSxDQUFDLEVBQUUsQ0FBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBRSxTQUFTLEVBQUUsOEJBQThCLENBQUUsRUFBRSxHQUFJLE9BQU8sQ0FBQyxPQUFRLEVBQUUsQ0FBRSxDQUFDO0lBQ25HLENBQUM7SUFFRCxFQUFFLENBQUMsS0FBSyxDQUFFLEdBQUksT0FBTyxDQUFDLE9BQVEsRUFBRSxDQUFFLENBQUM7SUFDbkMsRUFBRSxDQUFDLEtBQUssQ0FBRSxRQUFRLEVBQUUsUUFBUSxDQUFFLENBQUM7SUFDL0IsRUFBRSxDQUFDLElBQUksQ0FBRSxVQUFVLENBQUUsQ0FBQztJQUN0QixFQUFFLENBQUMsSUFBSSxDQUFFLFlBQVksQ0FBRSxDQUFDO0lBQ3hCLEVBQUUsQ0FBQyxJQUFJLENBQUUscUJBQXNCLGNBQWUsR0FBRyxDQUFFLENBQUM7SUFDcEQsRUFBRSxDQUFDLElBQUksQ0FBRSxxQkFBcUIsQ0FBRSxDQUFDO0lBRWpDLEVBQUUsQ0FBQyxDQUFFLGlCQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ1gsRUFBRSxDQUFDLElBQUksQ0FBRSxNQUFNLENBQUUsQ0FBQztJQUNwQixDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDTixFQUFFLENBQUMsSUFBSSxDQUFFLGFBQWEsQ0FBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDVixPQUFPLENBQUMsR0FBRyxDQUFFLFdBQVksT0FBTyxDQUFDLE9BQVEsd0JBQXdCLENBQUUsQ0FBQztBQUN0RSxDQUFDO0FBbkNELDRDQW1DQyJ9