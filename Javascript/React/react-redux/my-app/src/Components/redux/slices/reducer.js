const initialState = {
    todos: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return { ...state, todos: [...todos, action.payload] }
        case 'Delete_TODO':
            return {...state, todos: state.todos.filter(todo => todo.id !== action.payload)}
        default:
            return state;
    }
}