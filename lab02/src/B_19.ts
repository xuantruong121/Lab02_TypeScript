// 19. Create an async function fetchUsers(ids: number[]) that calls fetchUser for each
// ID.
interface User {
    id: number;
    name: string;
}

async function fetchUser2(id:number): Promise<User> {
    return new Promise((res) => {
        setTimeout(() => {
            res({id, name: `User ${id}`});
        }, 1000);
    });
}

async function fetchUsers(ids:number[]): Promise<User[]> {
    const users = await Promise.all(ids.map((id) => fetchUser2(id)));
    return users;
}

(async () => {
    const users = await fetchUsers([1, 2, 3, 4]);
    console.log(users);
})();