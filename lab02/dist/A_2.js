"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncNumber = void 0;
// 2. Write a function that returns a Promise resolving with the number 10 after 1 second.
exports.asyncNumber = new Promise((resolve) => {
    setTimeout(() => {
        resolve(10);
    }, 1000);
});
// test
exports.asyncNumber.then((num) => console.log(num));
