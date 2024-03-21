import {Component} from 'react';

class TodoList extends Component {
    render() {
      const { todos, toggleTodo } = this.props;
      const unfinishedTodos = todos.filter(todo => !todo.isDone);
      const finishedTodos = todos.filter(todo => todo.isDone);
      
      return (
        <div>
          <h2>Unfinished Todos</h2>
          <ul>
            {unfinishedTodos.map(todo => (
              <li key={todo.id} onClick={() => toggleTodo(todo.id)}>
                {todo.text}
              </li>
            ))}
          </ul>
          <h2>Finished Todos</h2>
          <ul>
            {finishedTodos.map(todo => (
              <li key={todo.id} onClick={() => toggleTodo(todo.id)}>
                <strike>{todo.text}</strike>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
export default TodoList;