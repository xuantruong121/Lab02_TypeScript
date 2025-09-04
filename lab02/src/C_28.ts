// 28. Write an async function batchProcess() that processes 5 async tasks at once (use
// Promise.all).
function asyncTask(id: number, time: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task ${id} done after ${time}ms`);
        }, time);
    });
}

async function batchProcess() {
    console.log("Start processing 5 tasks in parallel...");

    const tasks = [
        asyncTask(1, 1000),
        asyncTask(2, 2000),
        asyncTask(3, 1500),
        asyncTask(4, 3000),
        asyncTask(5, 2500),
    ];

    const results = await Promise.all(tasks);

    console.log("All tasks completed!");
    results.forEach((result) => console.log(result));
}

batchProcess();
