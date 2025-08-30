"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncRandomNumber = void 0;
// 10. Use .finally() to log "Done" when a Promise finishes (success or failure).
exports.asyncRandomNumber = new Promise((resolve, reject) => {
    const random = Math.random();
    if (random > 0.5) {
        resolve(random);
    }
    else {
        reject(new Error("Random number is too low"));
    }
});
// test
exports.asyncRandomNumber
    .then((num) => console.log("Random number:", num))
    .catch((error) => console.error("Error:", error.message))
    .finally(() => console.log("Done"));
