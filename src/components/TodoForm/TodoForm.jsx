import {Component} from 'react';

class TodoForm extends Component {
    constructor(props) {
        super(props);

        this.createTodo = props.createTodo;

        this.state = {
            newTodo: {
                id: this.props.currentId + 1,
                text: '',
                isDone: false
            }
        }

        this.setTodo = this.setTodo.bind(this);
        this.handleSendTodo = this.handleSendTodo.bind(this);
        this.resetNewTodo = this.resetNewTodo.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentId !== this.props.currentId) {
            this.setState(prevState => ({
                newTodo: {
                    ...prevState.newTodo,
                    id: this.props.currentId + 1,
                    text: ''
                }
            }));
        }
    }

    setTodo(event) {
        this.setState(prevState => ({
            newTodo: {
                ...prevState.newTodo,
                text:event.target.value
            }
        }));
    }

    handleSendTodo() {
        if(this.validateString()) {
            this.createTodo(this.state.newTodo);
            // this.resetNewTodo();
        }
            
        // console.log('newTodo: ', this.state.newTodo)
    }

    validateString() {
        return this.state.newTodo.text ? true : false;
    }

    resetNewTodo() {
        this.setState(prevState => ({
            newTodo:{
                ...prevState.newTodo,
                id: this.state.newTodo.id + 1,
                text: ''
            }
        }));
    }

    render() {
        return(
            <div className='todoForm'>
                <input 
                type='text' 
                placeholder='New task'
                value={this.state.newTodo.text} 
                onChange={this.setTodo}/>
                <button type='button' className='btn' onClick={this.handleSendTodo}>Save</button>
            </div>
        );
    }
}
export default TodoForm;