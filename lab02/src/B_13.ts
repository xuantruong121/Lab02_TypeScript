// 13. Handle errors using try/catch with async/await.
function simulateTask2(duration: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task completed in ${duration} ms`);
        }, duration);
    });
}

async function runTask2() {
    try {
        const result = await simulateTask2(2000);
        console.log(result);
    } catch (error) {
        if (error instanceof Error)
            console.error("Error: ", error.message);
    }
}

// test
runTask2();