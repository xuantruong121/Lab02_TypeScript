"use strict";
// 21. Use fetch to get data from a public API (e.g.,
// https: //jsonplaceholder. typicode.com/todos/1).
async function getTodo() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const todo = await response.json();
        console.log("Fetched todo: ", todo);
    }
    catch (err) {
        console.log("Fetch error: ", err);
    }
}
getTodo();
