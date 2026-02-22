import {useEffect, useState} from 'react';
import TaskForm from './TaskForm';
import MyModal from '../UI/MyModal/MyModal';
import Navbar from '../navbar/Navbar';
import Board from '../board/Board';
import * as api from '../../services/api';

const TaskPage = () => {

    const [tasks, setTasks] = useState([]);
    const [modal, setModal] = useState(false);

   useEffect(() => {
    (async () => {
      try {
        const data = await api.getTasks()
        setTasks(data || [])
      } catch (e) {
        alert('Ошибка загрузка задач: ', e)
      }
    })();
   }, [])
    const createTask = async (newTask) => {
      try {
        const created = await api.createTask(newTask)
        setTasks((prev) => [...prev, created])
        setModal(false)
      } catch (e) {
        alert('Ошибка создания задач: ', e)
      }
    }

    const removeTask = async (id) => {
      try {
        await api.deleteTask(id)
        setTasks(prev => prev.filter(task => task.id !== id))
      } catch (e) {
        alert('Ошибка удаления задача: ', e)
      }
    }
    
        
    const changeStatus = async (id, newStatus) => {
      try {
        const updated = await api.patchTask(id, {status: newStatus})
        setTasks((prev) => prev.map((t) => (t.id === id ? updated : t)))
      } catch (e) {
        alert('Ошибка изменения статуса: ', e)
      }
    };
    

    const updateTask = async (updatedTask) => {
      try {
        const data = await api.putTask(updatedTask.id, updatedTask);
        setTasks((prev) => prev.map((t) => (t.id === data.id ? data : t)));
      } catch (e) {
        alert("Ошибка полного обновления задачи:", e);
      }
    };
    
    
      
      
    return (
        <div>
            <Navbar setModal={setModal}/>
            <MyModal visible={modal} setVisible={setModal}>
                <TaskForm 
                create={createTask} setModal={setModal}/>
            </MyModal>
            <Board tasks={tasks} changeStatus={changeStatus}  removeTask={removeTask} updateTask={updateTask}/>
        </div>
    );
};

export default TaskPage;