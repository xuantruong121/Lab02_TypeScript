"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulateTask = void 0;
// 5. Create a function simulateTask(time) that returns a Promise resolving with "Task
// done" after time ms.
const simulateTask = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task done");
        }, time);
    });
};
exports.simulateTask = simulateTask;
// test
// simulateTask(1500).then((message) => console.log(message));
