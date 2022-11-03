const initState = {
    todoList: [],
}

const todoReducer = (state = initState, action) => {
    switch(action.type){
        case 'ADD TODO':
            return {
                ...state, 
                todoList: [...state.todoList, action.payload]
            }
        case 'DELETE TODO':
            const filteredTodos = state.todoList.filter(todo => todo.id !== action.payload.id)
            return {
                ...state, 
                todoList: filteredTodos
            }
        case 'UPDATE TODO':
            const listOfTodos = state.todoList;
            const listOfTodos2 = listOfTodos.map(entry => {
                if (entry.id === action.payload.id) {
                    return action.payload
                } else {
                    return entry
                }
            })
            return {
                ...state, 
                todoList: listOfTodos2
            }
        default:
            return state
    }
}

export default todoReducer;