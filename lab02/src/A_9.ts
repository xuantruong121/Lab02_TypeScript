// 9. Write a Promise that reads an array after 1 second and filters even numbers.
export const filterEvenNumbers = new Promise<number[]>((resolve) => {
    setTimeout(() => {
        const numbers = [1, 2, 3, 4, 5, 6];
        const evenNumbers = numbers.filter((num) => num % 2 === 0);
        resolve(evenNumbers);
    }, 1000);
});

// test
filterEvenNumbers.then((evenNums) => console.log(evenNums));