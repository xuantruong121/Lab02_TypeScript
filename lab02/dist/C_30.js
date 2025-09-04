"use strict";
// 30. Use async/await + Promise.allSettled() to handle multiple API calls and display their
// success/failure status.
async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${url}, status: ${response.status}`);
    }
    return response.json();
}
async function fetchMultipleAPIs() {
    const urls = [
        "https://jsonplaceholder.typicode.com/todos/1",
        "https://jsonplaceholder.typicode.com/todos/2",
        "https://jsonplaceholder.typicode.com/invalid-url",
        "https://jsonplaceholder.typicode.com/todos/3",
    ];
    console.log("Fetching multiple APIs in parallel...");
    const results = await Promise.allSettled(urls.map((url) => fetchData(url)));
    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(`API ${index + 1} succeeded:`, result.value);
        }
        else {
            console.error(`API ${index + 1} failed:`, result.reason);
        }
    });
}
fetchMultipleAPIs();
