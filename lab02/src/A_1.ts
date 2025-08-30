// 1. Create a Promise that returns the string "Hello Async" after 2 seconds.
export const asyncHello = new Promise<string>((resolve) => {
    setTimeout(() => {
        resolve("Hello Async");
    }, 2000);
});

// test
asyncHello.then((message) => console.log(message));

