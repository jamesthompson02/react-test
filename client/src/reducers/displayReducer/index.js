const initState = {
    addModal: "none",
    editModal: "none",
}

const displayReducer = (state = initState, action) => {
    switch(action.type){
        case 'CHANGE ADD MODAL DISPLAY':
            return {
                ...state, 
                addModal: action.payload
            }
        case 'CHANGE EDIT MODAL DISPLAY':
            return {
                ...state, 
                editModal: action.payload
            }
        default:
            return state
    }
}

export default displayReducer;