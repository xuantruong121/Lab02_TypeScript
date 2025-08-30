// 6. Use Promise.all() to run 3 simulated Promises in parallel and print the result.
import { simulateTask } from "./A_5";

const task1 = simulateTask(1000);
const task2 = simulateTask(2000);
const task3 = simulateTask(3000);

export const runAllTasks = Promise.all([task1, task2, task3]);

// test
runAllTasks.then((results) => console.log("All tasks completed:", results));