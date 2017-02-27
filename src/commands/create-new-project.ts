import * as sh from "shelljs";
import * as path from "path";

import { YARN } from "../data-types/data-types";

const commit_message: string = `
_________ _______  _______  _       _________
\\__   __/(  ____ \\(  ____ \\( \\      \\__   __/
   ) (   | (    \\/| (    \\/| (         ) (
   | |   | (_____ | |      | |         | |
   | |   (_____  )| |      | |         | |
   | |         ) || |      | |         | |
   | |   /\\____) || (____/\\| (____/\\___) (___
   )_(   \\_______)(_______/(_______/\\_______/

This Project was generated using TSCLI.
Initial Commit.
`;

export function createNewProject( cmd: any, options: any ): void {
  console.log( "TSCLI is generating a new " );

  if ( typeof cmd.type === "undefined" ) {
    console.log( "default project..." );
    sh.cp( "-r", path.resolve( __dirname, "../../.templates/default/" ), `${ options.project }` );
    sh.pushd( `${ options.project }` );
    sh.mkdir( "-p", "./docs", "./logs" );
    sh.exec( "git init" );
    sh.exec( "git add -A" );
    sh.exec( `git commit -m "${ commit_message }"` );
    if ( YARN ) {
      sh.exec( "yarn" );
    } else {
      sh.exec( "npm install" );
    }
    sh.popd();
    console.log( "Project created successfully." );
  }
}

