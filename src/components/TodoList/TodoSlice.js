const initState = [
    { id: 1, name: 'Learn React', completed: false },
    { id: 2, name: 'Learn Redux', completed: true}
];

const todoListReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todoList/addTodo':
            return [...state, action.payload];
        case 'todoList/toggleTodoStatus':
            return state.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed}
                : todo);
        default:
            return state;
    }
}

export default todoListReducer;
