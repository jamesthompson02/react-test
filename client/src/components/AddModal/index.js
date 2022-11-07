import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, changeAddModalDisplay } from '../../actions'; 
import Btn from '../Btn';
import './style.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const AddModal = () => {

    const addModalInput = useRef();
    const timeInput = useRef();
    const [ addModalInputValue, setInputValue ] = useState("");

    const dispatch = useDispatch();
    const addModalDisplay = useSelector(state => state.modalsDisplay.addModal);

    const changeInputValue = () => {
        const inputValue = addModalInput.current.value;
        return setInputValue(inputValue);
    }

    const hideAddModal = () => {
        dispatch(changeAddModalDisplay("none"));
        setInputValue("");
        setStartDate(null);
        return setDeadlineTime("");
    }

    const addATodo = () => {
        if (addModalInput.current.value === "") {
            return alert("Please input a task to add a todo");
        } else {
            const newTime = new Date();
            const newTask = addModalInput.current.value;
            let newDeadlineDate;
            let newDeadlineTime;
            if (startDate) {
                newDeadlineDate = startDate;
            } else {
                newDeadlineDate = null;
            }
            if (deadlineTime && startDate) {
                newDeadlineTime = deadlineTime;

            } else if (!startDate && deadlineTime){
                newDeadlineTime = "";
            } else if(startDate && !deadlineTime) {
                newDeadlineTime = "23:59"
            } else {
                newDeadlineTime = "";
            }
             const todo = {
                id: newTime,
                task: newTask,
                deadlineDate: newDeadlineDate,
                deadlineTime: newDeadlineTime
            }
            dispatch(addTodo(todo));
            hideAddModal();
            return setInputValue("");

        }
    }

    const [startDate, setStartDate] = useState(null);

    const [deadlineTime, setDeadlineTime] = useState("");

    const datePickerValue = () => {
        if (startDate) {
            return new Date(startDate)
        } else {
            return null
        }
    }


    const setNewTime = () => {
        let newTime = timeInput.current.value;
        console.log(newTime);
        return setDeadlineTime(newTime);
    }

    return (
        <div style={{display: addModalDisplay, margin: 0}} className='addModal-background'>
            <div className='addModal-container'>
                <h2>Add a Task</h2>
                <textarea ref={addModalInput} type="text" value={addModalInputValue} onChange={changeInputValue} 
                placeholder="Enter a task..." className='task-input'></textarea>
                <div>
                    <DatePicker 
                    selected={datePickerValue()}
                    onChange={date => setStartDate(date.toISOString())}
                    dateFormat="dd/MM/yyyy"
                    minDate={new Date()} 
                    isClearable
                    placeholderText='Click to choose a deadline date (optional)...'
                    className='datepicker-input'
                    />

                </div>
                <div className='time-input'>
                    <input 
                      ref={timeInput}
                      value={deadlineTime} 
                      type="time"
                      format="hh:mm"
                      onChange={setNewTime}
                    />
                </div>
                <footer className='btn-container'>
                    <Btn text="Add task" handleClick={addATodo} />
                    <Btn text="Cancel" handleClick={hideAddModal} />
                </footer>

            </div>
            
        </div>
    );
}

export default AddModal;
