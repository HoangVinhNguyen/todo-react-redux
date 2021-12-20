import { toggleTodoStatus } from "../../redux/actions";

const initState = [
    
];

const todoListReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todoList/addTodo':
            return [...state, action.payload];
        case 'todoList/addListTodo':
            return [...state, action.payload];
        case 'todoList/updateTodo':
            return state.map((todo) => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        name: action.payload.nameEdit
                    }
                }
                return todo;
            });
        case 'todoList/toggleTodoStatus':
            return state.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed}
                : todo);
        default:
            return state;
    }
}

export default todoListReducer;
