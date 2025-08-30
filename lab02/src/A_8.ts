// 8. Create a Promise chain: square the number 2, then double it, then add 5.
export const promiseChain = Promise.resolve(2)
    .then((num) => num * num) // Square the number (binh phuong mot so)
    .then((num) => num * 2)   // Double the result (gia tri gap doi)
    .then((num) => num + 5);

// test
promiseChain.then((result) => console.log(result));