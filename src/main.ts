#!/usr/bin/env node
import * as cmd from "commander";
import { VERSION } from "./data-types/data-types";

import { createNewProject } from "./commands/create-new-project";

const options: any = {};

cmd
  .version( `${ VERSION }` )
  .usage( "<command> <project> [options...]" )
  .arguments( "<command> <project>" )
  .option( "-t, --type <type>", "Project types: {default|node|js}" )
  .option( "--e2e", "End to end testing" )
  .option( "-w, --web", "Simple static Web setup" )
  .action( ( command: string, project: string ) => {
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
