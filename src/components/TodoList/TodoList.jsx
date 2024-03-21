import {Component} from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoList: props.list
        }
    }

    // componentDidUpdate(prevProps) {
    //     if(prevProps.list !== this.props.todoList) {
    //         this.setState({todoList: this.props.list});
    //     }
    // }

    getUndoneTodos() {
        const a = this.state.todoList.filter(todo => todo.isDone === false);
        console.log('received todos: ', a)
        return a;

    }
   
    getDoneTodos() {
        return this.state.todoList.filter(todo => todo.isDone === true);
    }

    render() {
        return(
            <div className='todoList'>
                <ul className='undone'>
                    {this.getUndoneTodos().forEach(todo => {
                        <li>{todo.text}</li>
                    })}
                </ul>
                <ul className='done'>
                    {this.getDoneTodos().map(todo => (
                        <li key={todo.id}>{todo.text}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
export default TodoList;