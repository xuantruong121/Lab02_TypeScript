"use strict";
async function getCompletedTodos() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const todos = await response.json();
        const completedTodos = todos.filter(todo => todo.completed);
        return completedTodos;
    }
    catch (err) {
        console.error("Error fetching todos:", err);
        return [];
    }
}
(async () => {
    const completed = await getCompletedTodos();
    console.log("Completed todos:", completed.slice(0, 5));
})();
