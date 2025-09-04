// 24. Write an async function postData() that sends a POST request to a test API.
interface Post {
    id?: number; // API sẽ tự sinh id
    title: string;
    body: string;
    userId: number;
}

async function postData(post: Post): Promise<Post> {
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

        const data: Post = await response.json();
        return data;
    } catch (error) {
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