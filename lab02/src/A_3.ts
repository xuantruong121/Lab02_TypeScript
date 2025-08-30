// 3. Write a function that rejects a Promise with the error "Something went wrong" after 1
// second.
export const asyncError = new Promise<never>((_, reject) => {
    setTimeout(() => {
        reject(new Error("Something went wrong"));
    }, 1000);
});

// test
asyncError.catch((error) => console.error(error.message));