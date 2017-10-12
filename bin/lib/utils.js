"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const https = require("https");
const http = require("http");
const fs = require("fs");
exports.hello = () => {
    return "Hello TSCLI!";
};
function goodbye() {
    return "See you later =)";
}
exports.goodbye = goodbye;
/** Download a file over HTTPS
 * @param uri {string} - URL of the file to download.
 * @param filename {string} - Filename to be saved as.
 * @param cb {any} - Callback function.
 * @return {void}
 */
function downloadFileHttps(uri, filename, cb) {
    const file = fs.createWriteStream(filename);
    file.on("finish", () => {
        // Safe to envoke the callback once file io is completed.
        cb();
    })
        .on("error", (err) => {
        // Delete the file async, don't check the result.
        fs.unlinkSync(filename);
        if (cb) {
            cb(err);
        }
    });
    /*const request =*/ https.get(uri, response => {
        response.on("aborted", (err) => {
            file.emit("error", err);
        });
        const SUCCESS_OK = 200;
        if (response.statusCode === SUCCESS_OK) {
            response.pipe(file);
        }
        else {
            file.emit("error", new Error(`Request Failed!\nStatus Code: ${response.statusCode}`));
        }
    });
}
exports.downloadFileHttps = downloadFileHttps;
/** Download a file over HTTP
 * @param uri {string} - URL of the file to download.
 * @param filename {string} - Filename to be saved as.
 * @param cb {any} - Callback function.
 * @return {void}
 */
function downloadFileHttp(uri, filename, cb) {
    const file = fs.createWriteStream(filename);
    file.on("finish", () => {
        // Safe to envoke the callback once file io is completed.
        cb();
    })
        .on("error", (err) => {
        // Delete the file async, don't check the result.
        fs.unlinkSync(filename);
        if (cb) {
            cb(err);
        }
    });
    /*const request =*/ http.get(uri, response => {
        response.on("aborted", (err) => {
            file.emit("error", err);
        });
        const SUCCESS_OK = 200;
        if (response.statusCode === SUCCESS_OK) {
            response.pipe(file);
        }
        else {
            file.emit("error", new Error(`Request Failed!\nStatus Code: ${response.statusCode}`));
        }
    });
}
exports.downloadFileHttp = downloadFileHttp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQStCO0FBQy9CLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFFWixRQUFBLEtBQUssR0FBRyxHQUFXLEVBQUU7SUFDaEMsTUFBTSxDQUFDLGNBQWMsQ0FBQztBQUN4QixDQUFDLENBQUM7QUFFRjtJQUNFLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztBQUM1QixDQUFDO0FBRkQsMEJBRUM7QUFFRDs7Ozs7R0FLRztBQUNILDJCQUFtQyxHQUFRLEVBQUUsUUFBZ0IsRUFBRSxFQUFPO0lBQ3BFLE1BQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBRSxRQUFRLENBQUUsQ0FBQztJQUM5QyxJQUFJLENBQUMsRUFBRSxDQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUU7UUFDdEIseURBQXlEO1FBQ3pELEVBQUUsRUFBRSxDQUFDO0lBQ1AsQ0FBQyxDQUFFO1NBQ0EsRUFBRSxDQUFFLE9BQU8sRUFBRSxDQUFFLEdBQVEsRUFBRyxFQUFFO1FBQzNCLGlEQUFpRDtRQUNqRCxFQUFFLENBQUMsVUFBVSxDQUFFLFFBQVEsQ0FBRSxDQUFDO1FBQzFCLEVBQUUsQ0FBQyxDQUFFLEVBQUcsQ0FBQyxDQUFDLENBQUM7WUFDVCxFQUFFLENBQUUsR0FBRyxDQUFFLENBQUM7UUFDWixDQUFDO0lBQ0gsQ0FBQyxDQUFFLENBQUM7SUFFTixtQkFBbUIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsRUFBRTtRQUM3QyxRQUFRLENBQUMsRUFBRSxDQUFFLFNBQVMsRUFBRSxDQUFFLEdBQVEsRUFBRyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBRSxDQUFDO1FBQzVCLENBQUMsQ0FBRSxDQUFDO1FBRUosTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLEVBQUUsQ0FBQyxDQUFFLFFBQVEsQ0FBQyxVQUFVLEtBQUssVUFBVyxDQUFDLENBQUMsQ0FBQztZQUN6QyxRQUFRLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBRSxDQUFDO1FBQ3hCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxJQUFJLENBQUUsT0FBTyxFQUFFLElBQUksS0FBSyxDQUFFLGlDQUFrQyxRQUFRLENBQUMsVUFBVyxFQUFFLENBQUUsQ0FBRSxDQUFDO1FBQzlGLENBQUM7SUFDSCxDQUFDLENBQUUsQ0FBQztBQUNOLENBQUM7QUExQkQsOENBMEJDO0FBRUQ7Ozs7O0dBS0c7QUFDSCwwQkFBa0MsR0FBVyxFQUFFLFFBQWdCLEVBQUUsRUFBTztJQUN0RSxNQUFNLElBQUksR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUUsUUFBUSxDQUFFLENBQUM7SUFDOUMsSUFBSSxDQUFDLEVBQUUsQ0FBRSxRQUFRLEVBQUUsR0FBRyxFQUFFO1FBQ3RCLHlEQUF5RDtRQUN6RCxFQUFFLEVBQUUsQ0FBQztJQUNQLENBQUMsQ0FBRTtTQUNBLEVBQUUsQ0FBRSxPQUFPLEVBQUUsQ0FBRSxHQUFRLEVBQUcsRUFBRTtRQUMzQixpREFBaUQ7UUFDakQsRUFBRSxDQUFDLFVBQVUsQ0FBRSxRQUFRLENBQUUsQ0FBQztRQUMxQixFQUFFLENBQUMsQ0FBRSxFQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ1QsRUFBRSxDQUFFLEdBQUcsQ0FBRSxDQUFDO1FBQ1osQ0FBQztJQUNILENBQUMsQ0FBRSxDQUFDO0lBRU4sbUJBQW1CLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLEVBQUU7UUFDNUMsUUFBUSxDQUFDLEVBQUUsQ0FBRSxTQUFTLEVBQUUsQ0FBRSxHQUFRLEVBQUcsRUFBRTtZQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFFLE9BQU8sRUFBRSxHQUFHLENBQUUsQ0FBQztRQUM1QixDQUFDLENBQUUsQ0FBQztRQUVKLE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUN2QixFQUFFLENBQUMsQ0FBRSxRQUFRLENBQUMsVUFBVSxLQUFLLFVBQVcsQ0FBQyxDQUFDLENBQUM7WUFDekMsUUFBUSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQztRQUN4QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsSUFBSSxDQUFFLE9BQU8sRUFBRSxJQUFJLEtBQUssQ0FBRSxpQ0FBa0MsUUFBUSxDQUFDLFVBQVcsRUFBRSxDQUFFLENBQUUsQ0FBQztRQUM5RixDQUFDO0lBQ0gsQ0FBQyxDQUFFLENBQUM7QUFDTixDQUFDO0FBMUJELDRDQTBCQyJ9