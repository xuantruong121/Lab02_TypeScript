"use strict";
// 11. Convert Exercise 1 into async/await.
function asyncHello() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.random();
            if (randomNumber > 0.5) {
                resolve("Hello Async");
            }
            else {
                reject(new Error("Failed to say Hello"));
            }
        }, 2000);
    });
}
// test
(async () => {
    try {
        const message = await asyncHello();
        console.log(message);
    }
    catch (error) {
        console.error("Error:", error.message);
    }
})();
