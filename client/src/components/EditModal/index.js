import React, { useRef, useState } from 'react';
import Btn from '../Btn';
import './style.css';
import { updateTodo, changeEditModalDisplay } from '../../actions'; 
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditModal = ({display1, todoTask, hideDisplay, id1, deadlineDate1, deadlineTime1 }) => {

    const editInput = useRef();
    const timeInput = useRef();

    const dispatch = useDispatch();

    let [task, setTask] = useState(todoTask);

    const id = id1;

    const calculateDateValue = () => {
        if (deadlineDate1) {
            return new Date(deadlineDate1);
        } else {
            return null
        }
    } 

    const [deadlineDate, setDeadlineDate ] = useState(calculateDateValue());

    const [deadlineTime, setDeadlineTime ] = useState(deadlineTime1);




    const updateTask = () => {
        const inputValue = editInput.current.value;
        return setTask(inputValue);

    }

    const setNewTime = () => {
        const newDeadlineTime = timeInput.current.value;
        return setDeadlineTime(newDeadlineTime);
    }

    const submitUpdatedTask = () => {
        const updatedTask = editInput.current.value;
        let newDeadlineDate;
        let newDeadlineTime;
        if (deadlineDate) {
            newDeadlineDate = deadlineDate;

        } else {
            newDeadlineDate = null;
        }
        if (deadlineDate && !deadlineTime) {
            newDeadlineTime = "23:59";

        } else if (deadlineDate && deadlineTime) {
            newDeadlineTime = deadlineTime;
        } else if (!deadlineDate && deadlineTime){
            newDeadlineTime = "";
        }
        const newTodo = {
            id: id,
            task: updatedTask,
            deadlineDate: newDeadlineDate,
            deadlineTime: newDeadlineTime
            
        }
       dispatch(updateTodo(newTodo));
       return hideDisplay();
        
    }

    const datePickerValue = () => {
        if (deadlineDate) {
            return new Date(deadlineDate)
        } else {
            return null
        }
    }

    return (
        <div style={{display: display1, margin: 0}} className='editModal-background'>
            <div className='editModal-container'>
                <h2>Edit this Task</h2>
                <textarea ref={editInput} type="text" value={task} onChange={updateTask}
                ></textarea>
                <div>
                    <DatePicker
                    selected={datePickerValue()}
                    onChange={date => setDeadlineDate(date.toISOString())}
                    dateFormat="dd/MM/yyyy"
                    minDate={new Date()} 
                    isClearable
                    placeholderText='Click to update the deadline date (optional)...'
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
                <footer>
                    <Btn text="Edit task" handleClick={submitUpdatedTask} />
                    <Btn text="Cancel" handleClick={hideDisplay} />
                </footer>

            </div>
            
        </div>
    );
}

export default EditModal;