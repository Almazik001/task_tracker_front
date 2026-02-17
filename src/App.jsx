import { useState } from 'react'
import './App.css'
import TaskPage from './components/task/TaskPage';



function App() {

  const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
  
  console.log(import.meta.env.VITE_SUPABASE_URL)

  return (
    <>
      <TaskPage/>
      
    </>
  )
}

export default App
