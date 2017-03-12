#!/usr/bin/env node
import * as cmd from "commander";
import { VERSION } from "./data-types/data-types";

import { createNewProject } from "./commands/create-new-project";

let options: any = {};

cmd
  .version( `${ VERSION }` )
  .usage( "<command> <project> [options...]" )
  .arguments( "<command> <project>" )
  .option( "-t, --type <type>", "Project types: {blank(defautl)|node|js|web|angular}" )
  .action(( command: string, project: string ) => {
    Object.assign( options, { command, project } );
  } )
  .parse( process.argv );

switch ( options.command ) {
  case "new":
    createNewProject( cmd, options );
    break;
  default:
    console.log( "Unknown command, doing nothing!" );
}
