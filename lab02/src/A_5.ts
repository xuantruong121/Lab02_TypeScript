// 5. Create a function simulateTask(time) that returns a Promise resolving with "Task
// done" after time ms.
export const simulateTask = (time: number): Promise<string> => {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve("Task done");
        }, time);
    });
}

// test
// simulateTask(1500).then((message) => console.log(message));