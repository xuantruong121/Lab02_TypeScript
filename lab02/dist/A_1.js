"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncHello = void 0;
// 1. Create a Promise that returns the string "Hello Async" after 2 seconds.
exports.asyncHello = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello Async");
    }, 2000);
});
// test
exports.asyncHello.then((message) => console.log(message));
