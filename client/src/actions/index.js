export const addTodo = (todo) => {
    return {
      type: "ADD TODO",
      payload: todo,
    };
};

export const deleteTodo = (todo) => {
    return {
      type: "DELETE TODO",
      payload: todo,
    };
};

export const updateTodo = (todo) => {
    return {
      type: "UPDATE TODO",
      payload: todo,
    };
};

export const changeAddModalDisplay = (display) => {
    return {
      type: "CHANGE ADD MODAL DISPLAY",
      payload: display,
    };
};

export const changeEditModalDisplay = (display) => {
    return {
      type: "CHANGE EDIT MODAL DISPLAY",
      payload: display,
    };
};