// 7. Use Promise.race() to return whichever Promise resolves first.
const simulateTask1 = (time: number) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task number 1");
        }, time);
    });
}
const simulateTask2 = (time: number) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task number 2");
        }, time);
    });
}

const fastTask = simulateTask1(5000); // Promise that resolves after 5 second
const slowTask = simulateTask2(3000); // Promise that resolves after 3 seconds
export const raceTasks = Promise.race([fastTask, slowTask]);

// test
raceTasks.then((result) => console.log("First task completed:", result));