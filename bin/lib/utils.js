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
function downloadFileHttps(uri, filename, cb) {
    const file = fs.createWriteStream(filename);
    file.on("finish", () => {
        cb();
    })
        .on("error", (err) => {
        fs.unlink(filename);
        if (cb) {
            cb(err);
        }
    });
    https.get(uri, response => {
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
function downloadFileHttp(uri, filename, cb) {
    const file = fs.createWriteStream(filename);
    file.on("finish", () => {
        cb();
    })
        .on("error", (err) => {
        fs.unlink(filename);
        if (cb) {
            cb(err);
        }
    });
    http.get(uri, response => {
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
//# sourceMappingURL=utils.js.map