"use strict";
// 22. Call the API multiple times and log the results.
async function getMultipleTodos() {
    try {
        const urls = [
            "https://jsonplaceholder.typicode.com/todos/1",
            "https://jsonplaceholder.typicode.com/todos/2",
            "https://jsonplaceholder.typicode.com/todos/3"
        ];
        const responses = await Promise.all(urls.map(url => fetch(url).then(res => res.json())));
        console.log("Fetched todos:", responses);
    }
    catch (err) {
        console.error("Fetch error:", err);
    }
}
getMultipleTodos();
