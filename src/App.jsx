import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Board from './components/navbar/Board/Board'
import Column from './components/navbar/Board/Column';
import MyModal from './components/navbar/UI/MyModal/MyModal';
import TaskForm from './components/TaskForm';
import './App.css'


function App() {

  const [tasks, setTasks] = useState([]);
  const [modal, setModal] = useState(false);

  const createTask = (newTask) => {
    setTasks(prev => [...prev, newTask])
    setModal(false)
  }

    
    const changeStatus = (id, newStatus) => {
      setTasks(prev =>
        prev.map(task => 
          task.id === id
          ? {...task, status: newStatus}
          : task
        )
      )
    } 

    const removeTask = (id) => {
        setTasks(prev => prev.filter(task => task.id !== id))
    }

  
  
  return (
    <>
      <Navbar setModal={setModal}/>
      <MyModal visible={modal} setVisible={setModal}>
        <TaskForm 
        create={createTask} setModal={setModal}/>
      </MyModal>
      <Board tasks={tasks} changeStatus={changeStatus}  removeTask={removeTask}/>
            
      {/* <MyButton onClick={() => changeStatus(todo.id, 'done')} >Готово</MyButton> */}
    </>
  )
}

export default App
