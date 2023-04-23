import React, { useState } from 'react'
import axios from 'axios';

//todo ile ilgili fonksiyonları custom hooksta topladık
const useAxios = () => {
    const [todos, setTodos] = useState<TodoType[]>([])//TodoType array olarak kabul ediyor
    const getTodos = async () => {
        const { data } = await axios.get<TodoType[]>("https://634ac3fc5df952851418480f.mockapi.io/api/todos")//gelen response a göre belirledik bu ne işe yarıyor gelen datanın fieldlarına erişebiliyoruz
        // console.log(data)
        setTodos(data)
    }
    const addTodo: AddFn = async (text) => {
        const newTodo = {
            task: text,
            isDone: false
        }
        const { data } = await axios.post<TodoType>("https://634ac3fc5df952851418480f.mockapi.io/api/todos", newTodo)
        if (data) {
            getTodos()
        }
    };


 }

export default useAxios