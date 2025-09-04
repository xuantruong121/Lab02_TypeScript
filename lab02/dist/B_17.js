"use strict";
// 17. Use for await...of to iterate over an array of Promises.
async function demoForAwait() {
    const promises = [
        Promise.resolve("A"),
        Promise.resolve("B"),
        Promise.resolve("C")
    ];
    for await (const result of promises) {
        console.log(result);
    }
}
demoForAwait();
