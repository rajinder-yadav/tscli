export declare const hello: () => string;
export declare function goodbye(): string;
/** Download a file over HTTPS
 * @param uri {string} - URL of the file to download.
 * @param filename {string} - Filename to be saved as.
 * @param cb {any} - Callback function.
 * @return {void}
 */
export declare function downloadFileHttps(uri: any, filename: string, cb: any): void;
/** Download a file over HTTP
 * @param uri {string} - URL of the file to download.
 * @param filename {string} - Filename to be saved as.
 * @param cb {any} - Callback function.
 * @return {void}
 */
export declare function downloadFileHttp(uri: string, filename: string, cb: any): void;
