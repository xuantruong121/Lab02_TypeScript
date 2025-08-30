"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterEvenNumbers = void 0;
// 9. Write a Promise that reads an array after 1 second and filters even numbers.
exports.filterEvenNumbers = new Promise((resolve) => {
    setTimeout(() => {
        const numbers = [1, 2, 3, 4, 5, 6];
        const evenNumbers = numbers.filter((num) => num % 2 === 0);
        resolve(evenNumbers);
    }, 1000);
});
// test
exports.filterEvenNumbers.then((evenNums) => console.log(evenNums));
