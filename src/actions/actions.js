import { ADD_TODO, TOGGLE_TODO } from "../utils/constants/actions";
import { v4 as uuidv4 } from 'uuid';

export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: {
        ...todo,
        id: uuidv4()
    }
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: id
});
