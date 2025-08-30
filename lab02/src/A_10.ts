// 10. Use .finally() to log "Done" when a Promise finishes (success or failure).
export const asyncRandomNumber = new Promise<number>((resolve, reject) => {
    const random = Math.random();
    if (random > 0.5) {
        resolve(random);
    }
    else {
        reject(new Error("Random number is too low"));
    }
});

// test
asyncRandomNumber
    .then((num) => console.log("Random number:", num))
    .catch((error) => console.error("Error:", error.message))
    .finally(() => console.log("Done"));