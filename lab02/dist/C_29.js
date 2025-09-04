"use strict";
// 29. Write an async function queueProcess() that processes tasks sequentially in a queue.
function asyncTask2(id, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task ${id} done after ${time}ms`);
        }, time);
    });
}
async function queueProcess() {
    console.log("Start processing tasks sequentially...");
    const tasks = [
        () => asyncTask2(1, 1000),
        () => asyncTask2(2, 2000),
        () => asyncTask2(3, 1500),
        () => asyncTask2(4, 3000),
        () => asyncTask2(5, 500),
    ];
    for (const task of tasks) {
        const result = await task();
        console.log(result);
    }
    console.log("All tasks completed sequentially!");
}
queueProcess();
