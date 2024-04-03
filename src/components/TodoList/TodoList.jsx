import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from "../../actions/actions";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const unfinishedTodos = todos.filter((todo) => !todo.isDone);
  const finishedTodos = todos.filter((todo) => todo.isDone);

  return (
    <div>
      <ul>
        {unfinishedTodos.map((todo) => (
          <li key={todo.id} onClick={() => handleToggle(todo.id)}>
            {todo.text}
          </li>
        ))}
        {finishedTodos.map((todo) => (
          <li key={todo.id} onClick={() => handleToggle(todo.id)}>
            <strike>{todo.text}</strike>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
