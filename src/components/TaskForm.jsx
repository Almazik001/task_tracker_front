import { useState } from 'react';
import MyButton from './navbar/UI/Mybutton/MyButton';
import MyInput from './navbar/UI/MyInput/MyInput'
import LogoTaks from '../assets/shape_logo.svg'

const TaskForm = ({ create }) => {
  const [task, setTask] = useState();

  const addTask = (e) => {
    e.preventDefault();

   const newTask = {
    ...task, id: Date.now(),
    title: task.title,
    body: task.body,
    status: 'todo', 
   }
  console.log('send' ,task)
   create(newTask)
    

    setTask({ title: '', body: '' });
    
  };
  




  
  return (
    <form className='modalForm' onSubmit={addTask}>
      <div className='modalLogo'>
        <img src={LogoTaks} alt="logoTaks" />
        <p>New Task</p>
      </div>

      <span>Task name</span>
      <MyInput
        type='text'
        value={task.title}
        placeholder="Название"
        onChange={e => setTask({ ...task, title: e.target.value })}
      />
      <span>Taks discription</span>
      <MyInput
        type='text'
        value={task.body}
        placeholder="Описание"
        onChange={e => setTask({ ...task, body: e.target.value })}
      />

      <MyButton type="submit" >
        Добавить
      </MyButton>

      
    </form>
  );
};

export default TaskForm;
