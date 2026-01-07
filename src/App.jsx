import { useState } from 'react'
import Navbar from './components/navbar/navbar'
import Board from './components/navbar/Board/Board'
import Column from './components/navbar/Board/Column';
import MyModal from './components/navbar/UI/MyModal/MyModal';
import TaskForm from './components/TaskForm';
import './App.css'


function App() {

  const [tasks, setTasks] = useState([]);
  const [modal, setModal] = useState(false);
  const [todos, setTodos] = useState([])

  const createTask = (newTask) => {
    setTasks([...tasks, newTask])
    setModal(false)
  }

    
    const changeStatus = (id, newStatus) => {
      setTodos(
        todos.map(todo => 
          todo.id === id
          ? {...todo, status: newStatus}
          : todo
        )
      )
    } 
  
  
  return (
    <>
      <Navbar setModal={setModal}/>
      <MyModal visible={modal} setVisible={setModal}>
        <TaskForm 
        create={createTask} />
      </MyModal>
      <Board todos={todos} changeStatus={changeStatus}  />
            
      {/* <MyButton onClick={() => changeStatus(todo.id, 'done')} >Готово</MyButton> */}
    </>
  )
}

export default App
