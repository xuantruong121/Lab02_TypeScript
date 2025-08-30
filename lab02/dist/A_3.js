"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncError = void 0;
// 3. Write a function that rejects a Promise with the error "Something went wrong" after 1
// second.
exports.asyncError = new Promise((_, reject) => {
    setTimeout(() => {
        reject(new Error("Something went wrong"));
    }, 1000);
});
// test
exports.asyncError.catch((error) => console.error(error.message));
