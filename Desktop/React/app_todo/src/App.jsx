import { useState } from 'react'
import './App.css'
import React from 'react'
import TodoList from './todoList';

function App() {
  const title = <h1>Todo List :</h1>;
  
  return (
    <>
      {title}
      
      <TodoList />
    </>
  )
}

export default App
