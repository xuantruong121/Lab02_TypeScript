// 2. Write a function that returns a Promise resolving with the number 10 after 1 second.
export const asyncNumber = new Promise<number>((resolve) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });

// test
asyncNumber.then((num) => console.log(num));