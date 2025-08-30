// 4. Use .then() and .catch() to handle a Promise that returns a random number.
export const asyncRandomNumber = new Promise<number>((resolve, reject) => {
    const randomNum = Math.random();
    if (randomNum >= 0.5) {
        resolve(randomNum);
    } else {
        reject(new Error("Random number is less than 0.5"));
    }
});

// test
asyncRandomNumber
    .then((num) => console.log("Random number:", num))
    .catch((error) => console.error("Error:", error.message));