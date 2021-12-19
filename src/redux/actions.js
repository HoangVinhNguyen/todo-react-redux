export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}
export const updateTodo = (data) => {
    return {
        type: 'todoList/updateTodo',
        payload: data
    }
}
export const toggleTodoStatus = (todoId) => {
    return {
        type: 'todoList/toggleTodoStatus',
        payload: todoId
    }
}