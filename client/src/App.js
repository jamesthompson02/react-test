import './App.css';
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeAddModalDisplay } from './actions';
import Btn from './components/Btn';
import TodosContainer from './components/TodosContainer';
import AddModal from './components/AddModal';

function App() {

  const dispatch = useDispatch();

  const todos = useSelector(state => state.todo.todoList);

  const displayAddModal = () => {
    return dispatch(changeAddModalDisplay("flex"))
  }

  // useEffect(() => {
  //   if (todos.length > 0) {
  //     todos.forEach(todo => {
  //       console.log(todo);
  //     })
  //   } else {
  //     console.log(todos.length);
  //   }

  // }, [todos])

  return (
    <div style={{margin: 0}}>
      <h1 style={{display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
        Todo List <Btn classname="fa-solid fa-plus" handleClick={displayAddModal}/>
      </h1>
      <AddModal />
      <TodosContainer />
      
      
    </div>
  );
}

export default App;
