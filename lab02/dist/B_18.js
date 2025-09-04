"use strict";
// 18. Write an async function fetchUser(id) that simulates an API call (resolves a user
// object after 1 second).
async function fetchUser(id) {
    return new Promise((res) => {
        setTimeout(() => res({ id, name: `User ${id}` }), 1000);
    });
}
(async () => {
    const user = await fetchUser(1);
    console.log(user);
})();
