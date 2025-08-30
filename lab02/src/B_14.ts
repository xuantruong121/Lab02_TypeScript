// 14. Write an async function that takes a number, waits 1 second, and returns the number × 3.
async function tripleAfter1Sec(num: number): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 3);
        }, 1000); // 1 second delay
    });
}

(async () => {
    const result = await tripleAfter1Sec(5);
    console.log("Result:", result); // Output after 1s → 15
})();
