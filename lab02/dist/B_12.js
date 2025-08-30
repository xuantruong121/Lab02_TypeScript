"use strict";
// 12. Write an async function that calls simulateTask(2000) and logs the result.
function simulateTask(duration) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task completed in ${duration} ms`);
        }, duration);
    });
}
async function runTask() {
    const result = await simulateTask(2000);
    console.log(result);
}
// test
runTask();
