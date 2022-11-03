import React, {useState} from 'react';
import './style.css';
import Btn from '../Btn';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, updateTodo, changeEditModalDisplay } from '../../actions'; 
import EditModal from '../EditModal';
import './style.css';

const Todo = ({task, id}) => {

    const todoList = useSelector(state => state.todo.todoList);

    const dispatch = useDispatch();

    const [ editModalDisplay, setEditModalDisplay ] = useState("none");

    const todo1 = {
        id: id,
        task: task,
    }


    const deleteTodo1 = () => {
        return dispatch(deleteTodo(todo1));

    }

    const displayEditModal = () => {
        return setEditModalDisplay("flex");
    }

    const hideEditModal = () => {
        return setEditModalDisplay("none");
    }

    return (
        <div  class="todo-container" style={{display: "flex"}} id={id}>
            {task}
            <div>
                <Btn classname="fa-solid fa-trash" handleClick={deleteTodo1}/>
                <Btn classname="fa-solid fa-pen"  handleClick={displayEditModal}/>
                <Btn classname="fa-solid fa-check" handleClick={deleteTodo1}/>
            </div>
            <EditModal display1={editModalDisplay} todoTask={task} hideDisplay={hideEditModal} id1={id} />
        </div>
    );
}

export default Todo;