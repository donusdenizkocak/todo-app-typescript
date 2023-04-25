import React from "react"
import InputForm from "../components/InputForm"
import TodoList from "../components/TodoList"
import { useState, useEffect } from "react"
import axios from "axios"
const url = "https://63ff141cc5c800a7238ae84e.mockapi.io/model/DRESS"



 const Home = () => {
const [todos, setTodos] = useState<TodoType[]>([])
const getTodos =async()=>{
    try {
     const {data} =await axios.get<TodoType[]>(url)
     setTodos(data)
     console.log(data)
    } catch (error) {
      console.log(error)  
    }
}
const addTodo:AddFn = async(text) => {
   const newTodo={
    task:text,
    isDone:false
   }
   try {
    await axios.post(url,newTodo)
    getTodos()
   } catch (error) {
    console.log(error)
   }
}

const toggleTodo:ToggleFn = async(item) => {
try {
  await axios.put(`${url}/${item.id}`, {...item,isDone:!item.isDone})
  getTodos()
} catch (error) {
  console.log(error)
}
}
const toggleTodo = async(item) =>{
try {
  await axios.post(url,newTodo)
  getTodos()
} catch (error) {
  
}
}

useEffect(() => {
 getTodos()
}, [])


  return (
    <div className="main">
        <InputForm addTodo={addTodo}/>
        <TodoList todos={todos} toggleTodo={toggleTodo}/>
    </div>
  )
}
export default Home