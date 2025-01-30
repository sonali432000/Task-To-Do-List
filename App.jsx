import { useState, useEffect } from 'react'
import TodoList from './assets/TodoList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoList/>
        
    </>
  )
}

export default App
