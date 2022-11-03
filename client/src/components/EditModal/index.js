import React, { useRef, useState } from 'react';
import Btn from '../Btn';
import './style.css';
import { updateTodo, changeEditModalDisplay } from '../../actions'; 
import { useDispatch, useSelector } from 'react-redux';

const EditModal = ({display1, todoTask, hideDisplay, id1}) => {

    const editInput = useRef();

    const dispatch = useDispatch();

    let [task, setTask] = useState(todoTask);

    const id = id1;


    const updateTask = () => {
        const inputValue = editInput.current.value;
        return setTask(inputValue);

    }

    const submitUpdatedTask = () => {
        const updatedTask = editInput.current.value;
        console.log(updatedTask);
        const newTodo = {
            task: updatedTask,
            id: id
        }
       dispatch(updateTodo(newTodo));
       return hideDisplay();
        
    }

    return (
        <div style={{display: display1, margin: 0}} className='editModal-background'>
            <div className='editModal-container'>
                <h2>Edit this Task</h2>
                <textarea ref={editInput} type="text" value={task} onChange={updateTask}
                ></textarea>
                <footer>
                    <Btn text="Edit task" handleClick={submitUpdatedTask} />
                    <Btn text="Cancel" handleClick={hideDisplay} />
                </footer>

            </div>
            
        </div>
    );
}

export default EditModal;