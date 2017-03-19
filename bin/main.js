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
    .option("-t, --type <type>", "Project types: {blank(defautl)|node|js|web|angular}")
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLGlDQUFpQztBQUNqQyx3REFBa0Q7QUFFbEQsc0VBQWlFO0FBRWpFLE1BQU0sT0FBTyxHQUFRLEVBQUUsQ0FBQztBQUV4QixHQUFHO0tBQ0EsT0FBTyxDQUFFLEdBQUksb0JBQVEsRUFBRSxDQUFFO0tBQ3pCLEtBQUssQ0FBRSxrQ0FBa0MsQ0FBRTtLQUMzQyxTQUFTLENBQUUscUJBQXFCLENBQUU7S0FDbEMsTUFBTSxDQUFFLG1CQUFtQixFQUFFLHFEQUFxRCxDQUFFO0tBQ3BGLE1BQU0sQ0FBQyxDQUFFLE9BQWUsRUFBRSxPQUFlO0lBQ3hDLE1BQU0sQ0FBQyxNQUFNLENBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFFLENBQUM7QUFDakQsQ0FBQyxDQUFFO0tBQ0YsS0FBSyxDQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUUsQ0FBQztBQUV6QixNQUFNLENBQUMsQ0FBRSxPQUFPLENBQUMsT0FBUSxDQUFDLENBQUMsQ0FBQztJQUMxQixLQUFLLEtBQUs7UUFDUixxQ0FBZ0IsQ0FBRSxHQUFHLEVBQUUsT0FBTyxDQUFFLENBQUM7UUFDakMsS0FBSyxDQUFDO0lBQ1I7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFFLGlDQUFpQyxDQUFFLENBQUM7QUFDckQsQ0FBQyJ9