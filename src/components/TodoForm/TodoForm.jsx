import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../actions/actions";

function TodoForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim() !== "") {
      dispatch(addTodo({ text, isDone: false }));
      setText("");
    }
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
