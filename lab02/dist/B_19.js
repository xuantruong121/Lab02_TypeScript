"use strict";
async function fetchUser2(id) {
    return new Promise((res) => {
        setTimeout(() => {
            res({ id, name: `User ${id}` });
        }, 1000);
    });
}
async function fetchUsers(ids) {
    const users = await Promise.all(ids.map((id) => fetchUser2(id)));
    return users;
}
(async () => {
    const users = await fetchUsers([1, 2, 3, 4]);
    console.log(users);
})();
