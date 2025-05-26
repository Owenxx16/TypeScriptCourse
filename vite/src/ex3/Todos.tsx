import React from "react";
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
const Todos = () => {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  return (
    <div>
      <h1>Todos</h1>
      <button onClick={() => addTodo("New Todo")}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
