function TodoList(props) {
    const { todos, toggleTodo } = props;
    const undoneTodos = todos.filter(todo => !todo.isDone);
    const doneTodos = todos.filter(todo => todo.isDone);

    return (
    <div className='todoList'>
        <ul>
        {undoneTodos.map(todo => (
            <li className="undone" key={todo.id} onClick={() => toggleTodo(todo.id)}>
            {todo.text}
            </li>
        ))}
        {doneTodos.map(todo => (
            <li className="done" key={todo.id} onClick={() => toggleTodo(todo.id)}>
            {todo.text}
            </li>
        ))}
        </ul>
    </div>
    );
}
export default TodoList;