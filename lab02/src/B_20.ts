// 20. Add a timeout: if the API call takes more than 2 seconds, throw an error.
interface User{
    id: number;
    name: string;
}

async function fetchUser3(id:number): Promise<User> {
    return new Promise((res) => {
        setTimeout(() => {
            res({id, name:`User${id}`});
        }, 2000);
    });
}

async function fetchUserWithTimeOut(id:number, timeoutMs: number = 2000): Promise<User> {
    const timeoutPromise = new Promise<never>((_, reject) => {
        setTimeout(() => reject(new Error("Timeout exceeded")), timeoutMs);
    });

    return Promise.race([fetchUser3(id), timeoutPromise]);
}

(async () => {
    try {
        const user = await fetchUserWithTimeOut(1);
        console.log("Fetched user: ",user)
    } catch (err) {
        console.error("Error:", err)
    }
})()