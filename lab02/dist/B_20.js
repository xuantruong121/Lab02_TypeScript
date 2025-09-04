"use strict";
async function fetchUser3(id) {
    return new Promise((res) => {
        setTimeout(() => {
            res({ id, name: `User${id}` });
        }, 2000);
    });
}
async function fetchUserWithTimeOut(id, timeoutMs = 2000) {
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error("Timeout exceeded")), timeoutMs);
    });
    return Promise.race([fetchUser3(id), timeoutPromise]);
}
(async () => {
    try {
        const user = await fetchUserWithTimeOut(1);
        console.log("Fetched user: ", user);
    }
    catch (err) {
        console.error("Error:", err);
    }
})();
