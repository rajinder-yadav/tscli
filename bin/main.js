#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cmd = require("commander");
const data_types_1 = require("./data-types/data-types");
const create_new_project_1 = require("./commands/create-new-project");
const options = {};
cmd
    .version(`${data_types_1.VERSION}`)
    .usage("<command> <project> [options...]")
    .arguments("<command> <project>")
    .option("-t, --type <type>", "Project types: {default|node|js}")
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLGlDQUFpQztBQUNqQyx3REFBa0Q7QUFFbEQsc0VBQWlFO0FBRWpFLE1BQU0sT0FBTyxHQUFRLEVBQUUsQ0FBQztBQUV4QixHQUFHO0tBQ0EsT0FBTyxDQUFFLEdBQUksb0JBQVEsRUFBRSxDQUFFO0tBQ3pCLEtBQUssQ0FBRSxrQ0FBa0MsQ0FBRTtLQUMzQyxTQUFTLENBQUUscUJBQXFCLENBQUU7S0FDbEMsTUFBTSxDQUFFLG1CQUFtQixFQUFFLGtDQUFrQyxDQUFFO0tBQ2pFLE1BQU0sQ0FBRSxDQUFFLE9BQWUsRUFBRSxPQUFlLEVBQUcsRUFBRTtJQUM5QyxNQUFNLENBQUMsTUFBTSxDQUFFLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBRSxDQUFDO0FBQ2pELENBQUMsQ0FBRTtLQUNGLEtBQUssQ0FBRSxPQUFPLENBQUMsSUFBSSxDQUFFLENBQUM7QUFFekIsTUFBTSxDQUFDLENBQUUsT0FBTyxDQUFDLE9BQVEsQ0FBQyxDQUFDLENBQUM7SUFDMUIsS0FBSyxLQUFLO1FBQ1IscUNBQWdCLENBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBRSxDQUFDO1FBQ2pDLEtBQUssQ0FBQztJQUNSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBRSxpQ0FBaUMsQ0FBRSxDQUFDO0FBQ3JELENBQUMifQ==