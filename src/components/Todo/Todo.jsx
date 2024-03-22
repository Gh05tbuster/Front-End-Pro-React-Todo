import {Component} from 'react';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';

class Todo extends Component {
    constructor(props) {
      super(props);
      this.state = {
        todos: []
      };
      this.idCounter = 0;
    }
  
    addTodo = (todo) => {
      const newTodo = { ...todo, id: ++this.idCounter };
      this.setState({todos: [...this.state.todos, newTodo]});
    }
  
    toggleTodo = (id) => {
      this.setState({
        todos: this.state.todos.map(todo =>
          todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        )
      });
    }
  
    render() {
      return (
        <div>
          <TodoForm addTodo={this.addTodo} />
          <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
        </div>
      );
    }
  }

export default Todo;