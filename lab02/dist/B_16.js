"use strict";
// 16. Call multiple async functions in parallel using Promise.all().
async function task2(name, delay) {
    return new Promise((res) => setTimeout(() => res(`Done: ${name}`), delay));
}
async function runParallelTasks() {
    const [r1, r2, r3] = await Promise.all([
        task2("Task 1", 1000),
        task2("Task 2", 2000),
        task2("Task 3", 1500)
    ]);
    console.log(r1, r2, r3);
}
runParallelTasks();
