import {Component} from 'react';

class TodoForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        text: ''
      };
    }
  
    handleChange = (event) => {
      this.setState({ text: event.target.value });
    }
  
    handleSubmit = (event) => {
      event.preventDefault();
      const { text } = this.state;
      if (text.trim() !== '') {
        this.props.addTodo({ text, isDone: false });
        this.setState({ text: '' });
      }
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input 
          type="text" 
          value={this.state.text} 
          placeholder='New task'
          onChange={this.handleChange} />
          <button type="submit">Save</button>
        </form>
      );
    }
  }
export default TodoForm;