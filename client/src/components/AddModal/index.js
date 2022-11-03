import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, changeAddModalDisplay } from '../../actions'; 
import Btn from '../Btn';
import './style.css';

// Test commit

const AddModal = () => {

    const addModalInput = useRef();
    const [ addModalInputValue, setInputValue ] = useState("");

    const dispatch = useDispatch();
    const addModalDisplay = useSelector(state => state.modalsDisplay.addModal);

    const changeInputValue = () => {
        const inputValue = addModalInput.current.value;
        return setInputValue(inputValue);
    }

    const hideAddModal = () => {
        dispatch(changeAddModalDisplay("none"));
        return setInputValue("");
    }

    const addATodo = () => {
        if (addModalInput.current.value === "") {
            return alert("Please input a task to add a todo");
        } else {
            const newTime = new Date();
            const newTask = addModalInput.current.value;
            const todo = {
                id: newTime,
                task: newTask 
            }
            dispatch(addTodo(todo));
            hideAddModal();
            return setInputValue("");

        }
        


    }

    return (
        <div style={{display: addModalDisplay, margin: 0}} className='addModal-background'>
            <div className='addModal-container'>
                <h2>Add a Task</h2>
                <textarea ref={addModalInput} type="text" value={addModalInputValue} onChange={changeInputValue} 
                placeholder="Enter a task..."></textarea>
                <footer>
                    <Btn text="Add task" handleClick={addATodo} />
                    <Btn text="Cancel" handleClick={hideAddModal} />
                </footer>

            </div>
            
        </div>
    );
}

export default AddModal;
