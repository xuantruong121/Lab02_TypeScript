"use strict";
async function postData(post) {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Error posting data:", error);
        throw error;
    }
}
// Test
(async () => {
    const newPost = await postData({
        title: "Hello world",
        body: "This is a test post",
        userId: 1
    });
    console.log("Posted data:", newPost);
})();
