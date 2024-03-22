function TodoList(props) {
    const { todos, toggleTodo } = props;
    const undoneTodos = todos.filter(todo => !todo.isDone);
    const doneTodos = todos.filter(todo => todo.isDone);

    return (
    <div className='todoList'>
        <ul className='undoneTodos'>
        {undoneTodos.map(todo => (
            <li key={todo.id} onClick={() => toggleTodo(todo.id)}>
            {todo.text}
            </li>
        ))}
        </ul>
        <ul className='doneTodos'>
        {doneTodos.map(todo => (
            <li key={todo.id} onClick={() => toggleTodo(todo.id)}>
            {todo.text}
            </li>
        ))}
        </ul>
    </div>
    );
}
export default TodoList;