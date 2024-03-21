import {Component} from 'react';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';

class Todo extends Component {
    constructor(props) {
      super(props);
      this.state = {
        todos: []
      };
      this.idCounter = 1;
    }
  
    addTodo = (todo) => {
      const newTodo = { ...todo, id: this.idCounter++ };
      this.setState(prevState => ({
        todos: [...prevState.todos, newTodo]
      }));
    }
  
    toggleTodo = (id) => {
      this.setState(prevState => ({
        todos: prevState.todos.map(todo =>
          todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        )
      }));
    }
  
    render() {
      return (
        <div>
          <h1>Todo List</h1>
          <TodoForm addTodo={this.addTodo} />
          <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
        </div>
      );
    }
  }

export default Todo;