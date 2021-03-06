import * as sh from "shelljs";
import * as path from "path";
import * as fs from "fs";
import * as utils from "../lib/utils";

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

  if ( cmd.type === undefined || cmd.type === "ts" || cmd.type === "default" ) {
    console.log( "TSCLI is generating a new default TypeScript project..." );
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
  sh.mkdir( "docs", "logs" );
  sh.exec( "git init" );
  sh.exec( "git add -A" );
  sh.exec( `git commit -q -m "${ commit_message }"` );
  sh.exec( "git checkout -b dev" );

  if ( YARN ) {
    sh.exec( "yarn" );
  } else {
    sh.exec( "npm install" );
  }

  // Also need to take into consideration different platforms: Win, MacOS, Linux 32/64.

  // Set up end to end testing.
  if ( !cmd.e2e ) {
    sh.mkdir( "bin_tools" );

    // Download Chromedriver.
    utils.downloadFileHttps( "https://chromedriver.storage.googleapis.com/2.33/chromedriver_mac64.zip",
      "./bin_tools/chromedriver_mac64.zip",
      function( err: any ) {
        if ( err ) {
          console.log( err.message );
        } else {
          console.log( "Downloaded Chromedriver." );
          sh.pushd( `${ options.project }/bin_tools` );
          sh.exec( "unzip chromedriver_mac64.zip" );
          sh.rm( "chromedriver_mac64.zip" );
          sh.popd();
        }
      } );

    // Download standalone selenium-server.
    utils.downloadFileHttp( "http://selenium-release.storage.googleapis.com/3.7/selenium-server-standalone-3.7.1.jar",
      "./bin_tools/selenium-server-standalone-3.7.1.jar",
      function( err: any ) {
        if ( err ) {
          console.log( err.message );
        } else {
          console.log( "Downloaded Selenium server." );
        }
      } );
  }

  sh.popd();
  console.log( `Project ${ options.project } created successfully.` );
}
