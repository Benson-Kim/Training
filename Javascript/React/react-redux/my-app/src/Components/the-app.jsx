import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import todos from './todos'

const Theapp = () => {
    const Todos = () => {
        const todos = useSelector(state => state.todos)
        if (!todos || !todos.length) {
            return <p>No items</p>
        }
        return (
            <div className='mt-10 text-center '>
                <h2 className='text-lg text-white font-semibold'>To do list</h2>
                {todos.map(todo=> 
                <div className='flex items-center justify-between w-96 m-5'>
                    <p>{todo.label}</p>
                    <button className='bg-blue-300 rounded px-2 py-1 hover:bg-blue-500'>Remove</button>
                    </div>
                )}
            </div>
        )
    }
    const TodoInput = () => {
        const dispatch = useDispatch();
        const [newToDo, setNewToDo] = useState();
        const handleChange = event => setNewToDo(event.target.value)
        const handleClick = () => dispatch({
            type: 'ADD_TODO', 
            payload: {
                label: newToDo,
                id: Math.ceil(Math.random()*100),
            }
        })

        return (
            <form className="flex flex-col items-center">

                <div className=''>
                    <label htmlFor="input-todo"></label>
                    <input className=' m-5 py-2 px-3 rounded focus:outline-none' type="text" name='input-todo' placeholder='Input task'
                        value={newToDo} onChange={handleChange} />
                    <button className='bg-blue-600 my-5 rounded cursor-pointer px-4 py-2 text-white hover:bg-blue-900'
                    onClick={handleClick}>Add</button>
                </div>
            </form>
        )
    }
    return (
        <div className='bg-slate-500 mt-10 '>
            
            
        </div>
    )
}

export default Theapp