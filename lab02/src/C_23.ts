// 23. Write an async function that fetches a list of todos and filters out those that are not
// completed.
interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

async function getCompletedTodos(): Promise<Todo[]> {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const todos: Todo[] = await response.json();
        const completedTodos = todos.filter(todo => todo.completed);
        
        return completedTodos;
    } catch(err) {
        console.error("Error fetching todos:",err);
        return [];
    }
}

(async () => {
    const completed = await getCompletedTodos();
    console.log("Completed todos:", completed.slice(0, 5))
})();