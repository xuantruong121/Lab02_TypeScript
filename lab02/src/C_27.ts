// 27. Write a function fetchWithRetry(url, retries) that retries up to retries times if
// the API call fails.
async function fetchWithRetry(url: string, retries: number): Promise<any> {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            console.log(`Attempt ${attempt}...`);
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Success!");
            return data;
        } catch (error) {
            console.error(`Attempt ${attempt} failed:`, error);

            if (attempt === retries) {
                throw new Error("All retries failed.");
            }

            await new Promise((resolve) => setTimeout(resolve, 1000));
        }
    }
}

(async () => {
    try {
        const data = await fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1", 3);
        console.log("Data:", data);
    } catch (error) {
        console.error("Final Error:", error);
    }
})();

