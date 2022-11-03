import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../actions'; 
import Todo from '../Todo';
import './style.css';
import ReactPaginate from 'react-paginate';

const TodosContainer = () => {

    const todosList = useSelector(state => state.todo.todoList);

    let reversedTodosList = [];
    if (todosList.length > 0) {
        for (let i = (todosList.length - 1); i >= 0; i-- ) {
        reversedTodosList.push(todosList[i]);
    }  
    }

    const dispatch = useDispatch();

    const LOCAL_STORAGE_KEY = 'todosList'

    useEffect(() => {
        const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);

        if (storedTodos) {
            const storedTodosJSON = JSON.parse(storedTodos);
            storedTodosJSON.forEach(todo => {
                dispatch(addTodo(todo));
            })
        }

    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todosList))

    }, [todosList])

    // useEffect(() => {
    //     localStorage.removeItem(LOCAL_STORAGE_KEY);

    // }, [])

    const [pageCount, setPageCount] = useState(0);
    const tasksPerPage = 5;
    
   
   const tasksBrowsedThrough = pageCount * tasksPerPage;

   function newKeyGenerator() {
    let newKey = "";
    for (let i = 0; i <=24; i++) {
        const newNum = Math.floor(Math.random() * 10);
        newKey += newNum;
    }
    return newKey
    }

    const displayTasks = reversedTodosList
    .slice(tasksBrowsedThrough, (tasksBrowsedThrough + tasksPerPage))
    .map(todo => {
        const newKey = newKeyGenerator();
        return <Todo key={newKey} task={todo.task} id={todo.id} />
        
    })
    

    const pageNumbers = () => {
        if (todosList.length > 0) {
            const pageNumbers = Math.ceil(todosList.length / tasksPerPage);
            return pageNumbers
        } else {
            return 1
        }
    }

    const pageChange = ({selected}) => {
        return setPageCount(selected)

    }

    return (
        
        <div id="todos-container">
            {todosList.length > 0 ? displayTasks : null}
            <ReactPaginate 
                previousLabel="Previous"
                nextLabel="Next"
                pageCount={pageNumbers()}
                onPageChange={pageChange}
                containerClassName="pagination-row"
                previousLinkClassName="previousBtn"
                nextLinkClassName="nextBtn"
                activeClassName='bold-numbers'
                pageLinkClassName='general-numbers'
            />
            
    
        </div>
        
        
    );
}

export default TodosContainer;
