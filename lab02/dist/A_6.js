"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runAllTasks = void 0;
// 6. Use Promise.all() to run 3 simulated Promises in parallel and print the result.
const A_5_1 = require("./A_5");
const task1 = (0, A_5_1.simulateTask)(1000);
const task2 = (0, A_5_1.simulateTask)(2000);
const task3 = (0, A_5_1.simulateTask)(3000);
exports.runAllTasks = Promise.all([task1, task2, task3]);
// test
exports.runAllTasks.then((results) => console.log("All tasks completed:", results));
