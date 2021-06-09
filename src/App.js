import './App.css';
import Header from './Mycomponents/Header';
import {Addtodo} from './Mycomponents/Addtodo'
import {Todos} from './Mycomponents/Todos';
import {Footer} from './Mycomponents/Footer'; 
import React, { useState, useEffect } from 'react';

function App() {
  let initTodo
  if(localStorage.getItem("todos")===null){
  initTodo = []
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  const onDelete = (todo)=>{
  console.log('Deleted',todo)
  setTodos(todos.filter((element)=>{
    return element!=todo
  }))
  localStorage.setItem("todos",JSON.parse(todos));
  }
  const addTodo = (title,desc)=>{
       console.log('adding',title,desc)
       
       const myTodo = {
         title : title,
         desc : desc
            }
       setTodos([...todos,myTodo])
       console.log(myTodo)
       
  }

  const [todos,setTodos] =  useState(initTodo)
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
   }, [todos])
  return (
    <>
      <Header title='My todos list' searchbar={true}/>
      <Addtodo addTodo = {addTodo}/>
      <Todos todos={todos} onDelete = {onDelete}/>
      <Footer/> 
    </>
  );
}

export default App;
