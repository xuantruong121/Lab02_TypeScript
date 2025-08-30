"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncRandomNumber = void 0;
// 4. Use .then() and .catch() to handle a Promise that returns a random number.
exports.asyncRandomNumber = new Promise((resolve, reject) => {
    const randomNum = Math.random();
    if (randomNum >= 0.5) {
        resolve(randomNum);
    }
    else {
        reject(new Error("Random number is less than 0.5"));
    }
});
// test
exports.asyncRandomNumber
    .then((num) => console.log("Random number:", num))
    .catch((error) => console.error("Error:", error.message));
