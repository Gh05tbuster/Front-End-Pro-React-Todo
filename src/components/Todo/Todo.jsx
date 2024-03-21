import {Component} from 'react';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';

class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            currentId: 0
        }

        this.setNewTodo = this.setNewTodo.bind(this);
        this.increaseId = this.increaseId.bind(this);
    }

    setNewTodo(text) {
        this.setState(prevState => ({
            todos: [...prevState.todos, text]
        }), () => {
            this.increaseId();
        });
    }

    increaseId() {
        this.setState(prevState => ({
            currentId: prevState.currentId + 1
        }), () => {
            // console.log('currentId: ', this.state.currentId);
            // console.log('todos: ', this.state.todos);
        });
    }
    render() {
        return(
            <>
                <TodoForm createTodo={this.setNewTodo} currentId={this.state.currentId}/>
                <TodoList list={this.state.todos}/>
            </>
        );
    }
}

export default Todo;