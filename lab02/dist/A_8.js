"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promiseChain = void 0;
// 8. Create a Promise chain: square the number 2, then double it, then add 5.
exports.promiseChain = Promise.resolve(2)
    .then((num) => num * num) // Square the number (binh phuong mot so)
    .then((num) => num * 2) // Double the result (gia tri gap doi)
    .then((num) => num + 5);
// test
exports.promiseChain.then((result) => console.log(result));
