import * as sh from "shelljs";
import * as path from "path";
import * as fs from "fs";

import { VERSION, YARN } from "../data-types/data-types";

const commit_message: string = `
This Project was generated using TSCLI (${ VERSION }).
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

export function createNewProject( cmd: any, options: any ): void {

  if ( fs.existsSync( options.project ) ) {
    console.log( `Folder ${ options.project } already exists!` );
    return;
  }

  if ( cmd.type === undefined || cmd.type === "default" ) {
    console.log( "TSCLI is generating a new default project..." );
    sh.cp( "-r", path.resolve( __dirname, "../../.templates/default/" ), `${ options.project }` );
  }
  else if ( cmd.type === "node" ) {
    console.log( "TSCLI is generating a TypeScript Node.js project..." );
    sh.cp( "-r", path.resolve( __dirname, "../../.templates/node/" ), `${ options.project }` );
  }
  else if ( cmd.type === "js" ) {
    console.log( "TSCLI is generating a JavaScript Node.js project..." );
    sh.cp( "-r", path.resolve( __dirname, "../../.templates/javascript/" ), `${ options.project }` );
  }

  sh.pushd( `${ options.project }` );
  sh.mkdir( "./docs", "./logs" );
  sh.exec( "git init" );
  sh.exec( "git add -A" );
  sh.exec( `git commit -q -m "${ commit_message }"` );
  sh.exec( "git checkout -b dev" );

  if ( YARN ) {
    sh.exec( "yarn" );
  } else {
    sh.exec( "npm install" );
  }

  sh.popd();
  console.log( `Project ${ options.project } created successfully.` );
}
