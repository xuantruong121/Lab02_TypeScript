// 15. Call multiple async functions sequentially using await.
// Một hàm async mô phỏng công việc tốn thời gian
async function task(name: string, delay: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Done: ${name}`);
        }, delay);
    });
}

// Hàm chính gọi tuần tự các task
async function runSequentialTasks() {
    console.log("Start");

    const result1 = await task("Task 1", 1000);
    console.log(result1);

    const result2 = await task("Task 2", 2000);
    console.log(result2);

    const result3 = await task("Task 3", 1500);
    console.log(result3);

    console.log("All tasks completed");
}

runSequentialTasks();
