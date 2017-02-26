#!/usr/bin/env node
import * as sh from "shelljs";
import * as cmd from "commander";
import * as path from "path";

const YARN = sh.which( "yarn" );

let options: any = {};

cmd
  .version( "0.1.2-alpha.3" )
  .usage( "<command> <project> [options...]" )
  .arguments( "<command> <project>" )
  .option( "-t, --type <type>", "Project types: {blank(defautl)|node|web|angular}" )
  .action(( command, project ) => {
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

function createNewProject( cmd: any, options: any ): void {
  console.log( "TSCLI is generating a new " );

  if ( typeof cmd.type === "undefined" ) {
    console.log( "default project..." );
    sh.cp( "-r", path.resolve( __dirname, "../.templates/default/" ), `${ options.project }` );
    sh.pushd( `${ options.project }` );
    sh.mkdir( "-p", "./docs", "./logs" )
    sh.exec( "git init" );
    if ( YARN ) {
      sh.exec( "yarn" );
    } else {
      sh.exec( "npm install" );
    }
    sh.popd();
    console.log( "Project created successfully." );
  }
}
