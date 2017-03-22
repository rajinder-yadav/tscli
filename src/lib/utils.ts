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
  /*const request =*/ https.get( uri, function( response ) {
    response.pipe( file );
    file.on( "finish", function() {
      cb();
    } )
      .on( "error", function( err: any ) {
        // Delete the file async, don't check the result.
        fs.unlink( filename );
        if ( cb ) {
          cb( err );
        }
      } );
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
  /*const request =*/ http.get( uri, function( response ) {
    response.pipe( file );
    file.on( "finish", function() {
      cb();
    } )
      .on( "error", function( err: any ) {
        // Delete the file async, don't check the result.
        fs.unlink( filename );
        if ( cb ) {
          cb( err );
        }
      } );
  } );
}
