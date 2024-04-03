import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";

function Todo() {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default Todo;
