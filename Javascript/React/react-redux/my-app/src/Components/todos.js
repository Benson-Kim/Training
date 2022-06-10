import React from 'react'
import { useSelector } from 'react-redux'

const todos = () => {
    const todos = useSelector(state => todo.todos)
    console.log(todos);
  return (
    <div>todos</div>
  )
}

export default todos