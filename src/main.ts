#!/usr/bin/env node
import * as cmd from "commander";

import { createNewProject } from "./commands/create-new-project";

let options: any = {};

cmd
  .version( "0.1.2-alpha.3" )
  .usage( "<command> <project> [options...]" )
  .arguments( "<command> <project>" )
  .option( "-t, --type <type>", "Project types: {blank(defautl)|node|web|angular}" )
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
