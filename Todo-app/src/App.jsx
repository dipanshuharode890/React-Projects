import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context'
import { TodoForm, TodoItem } from './components'

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed : !prevTodo.completed} : prevTodo))
  }

  // useEffect(() => {
  //   const todos = JSON.parse(localStorage.getItem("todos"))
  //     if(todos && todos.length > 0){
  //       setTodos(todos)
  //     }
  // }, [])
  useEffect(() => {
  try {
    const stored = localStorage.getItem("todos");
    const todos = stored ? JSON.parse(stored) : [];

    if (Array.isArray(todos) && todos.length > 0) {
      setTodos(todos);
    }
  } catch (error) {
    console.error("Invalid JSON in localStorage:", error);
  }
}, []);


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
        <div className="bg-[#176b8c] min-h-screen py-8 px-3">
          <div className="w-full max-w-2xl mx-auto bg-[#4ea6b9] shadow-lg rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
              {/* Todo form goes here */}
              <TodoForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
              {todos.map((todo) => (
                <div key={todo.id} className='w-full'>
                  <TodoItem todo={todo} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </TodoProvider>
    </>
  )
}

export default App
