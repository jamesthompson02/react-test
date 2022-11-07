import React, {useState} from 'react';
import './style.css';
import Btn from '../Btn';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, updateTodo } from '../../actions'; 
import EditModal from '../EditModal';
import './style.css';

const Todo = ({task, id, deadlineDate, deadlineTime}) => {

    // const todoList = useSelector(state => state.todo.todoList);

    const dispatch = useDispatch();

    const [ editModalDisplay, setEditModalDisplay ] = useState("none");

    const todo1 = {
        id: id,
        task: task,
        deadlineDate: deadlineDate,
        deadlineTime: deadlineTime
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

    const deadlineDateText = () => {
        if (deadlineDate) {
            let newDeadlineDate = new Date(deadlineDate);
            newDeadlineDate = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long' }).format(newDeadlineDate);
            newDeadlineDate = newDeadlineDate.substring(0, (newDeadlineDate.length - 16))
            return (
                <p>The deadline date is: {newDeadlineDate}</p>
            )
        }  else {
            return (
                <p>The deadline date is: N/A</p>
            )
        }
    }

    const deadlineTimeText = () => {
        if (deadlineTime) {
            if (parseInt(deadlineTime.substring(0, 2)) >= 12) {
                return (
                    <p>The deadline time is: {deadlineTime}pm</p>
                )
            } else {
                return (
                    <p>The deadline time is: {deadlineTime}am</p>
                )
            }
        } else {
            return (
                <p>The deadline time is: N/A </p>
            )
        }
    }

    return (
        <div  className="todo-container" style={{display: "flex"}} id={id}>
            <div>
                {task}
                {deadlineDateText()}
                {deadlineTimeText()}
            </div>
            <div>
                <Btn classname="fa-solid fa-trash" handleClick={deleteTodo1}/>
                <Btn classname="fa-solid fa-pen"  handleClick={displayEditModal}/>
                <Btn classname="fa-solid fa-check" handleClick={deleteTodo1}/>
            </div>
            <EditModal 
                display1={editModalDisplay}
                todoTask={task}
                hideDisplay={hideEditModal}
                id1={id}
                deadlineDate1={deadlineDate}
                deadlineTime1={deadlineTime}
            />
        </div>
    );
}

export default Todo;