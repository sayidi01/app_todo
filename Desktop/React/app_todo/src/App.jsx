import { useState } from 'react'
import './App.css'
import React from 'react'
import TodoList from './todoList';
import TaskList from "./TaskList";


function App() {
  const title = <h1>Todo List :</h1>;
  
  return (
    <>
     <TaskList/>
      {/* {title}
      
      <TodoList /> */}
    </>
  )
}

export default App
