import * as https from "https";
import * as http from "http";
import * as fs from "fs";

export const hello = (): string => {
  return "Hello TSCLI!";
};

export function goodbye(): string {
  return "See you later =)";
}

/** Download a file over HTTPS
 * @param uri {string} - URL of the file to download.
 * @param filename {string} - Filename to be saved as.
 * @param cb {any} - Callback function.
 * @return {void}
 */
export function downloadFileHttps( uri: string, filename: string, cb: any ): void {
  const file = fs.createWriteStream( filename );
  file.on( "finish", () => {
    // Safe to envoke the callback once file io is completed.
    cb();
  } )
    .on( "error", ( err: any ) => {
      // Delete the file async, don't check the result.
      fs.unlink( filename );
      if ( cb ) {
        cb( err );
      }
    } );

  /*const request =*/ https.get( uri, response => {
    response.on( "aborted", ( err: any ) => {
      file.emit( "error", err );
    } );

    const SUCCESS_OK = 200;
    if ( response.statusCode === SUCCESS_OK ) {
      response.pipe( file );
    } else {
      file.emit( "error", new Error( `Request Failed!\nStatus Code: ${ response.statusCode }` ) );
    }
  } );
}

/** Download a file over HTTP
 * @param uri {string} - URL of the file to download.
 * @param filename {string} - Filename to be saved as.
 * @param cb {any} - Callback function.
 * @return {void}
 */
export function downloadFileHttp( uri: string, filename: string, cb: any ): void {
  const file = fs.createWriteStream( filename );
  file.on( "finish", () => {
    // Safe to envoke the callback once file io is completed.
    cb();
  } )
    .on( "error", ( err: any ) => {
      // Delete the file async, don't check the result.
      fs.unlink( filename );
      if ( cb ) {
        cb( err );
      }
    } );

  /*const request =*/ http.get( uri, response => {
    response.on( "aborted", ( err: any ) => {
      file.emit( "error", err );
    } );

    const SUCCESS_OK = 200;
    if ( response.statusCode === SUCCESS_OK ) {
      response.pipe( file );
    } else {
      file.emit( "error", new Error( `Request Failed!\nStatus Code: ${ response.statusCode }` ) );
    }
  } );
}
