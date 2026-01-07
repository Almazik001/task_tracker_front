import { useState } from 'react';
import MyButton from './navbar/UI/Mybutton/MyButton';
import MyInput from './navbar/UI/MyInput/MyInput'
import LogoTaks from '../assets/shape_logo.svg'

const TaskForm = ({ create }) => {
  const [task, setTask] = useState({ title: '', body: '' });

  const addTask = (e) => {
    e.preventDefault();

    if (!task.title.trim()) return;

    create({
      id: Date.now(),
      title: task.title,
      body: task.body,
      status: 'todo'
    });

    setTask({ title: '', body: '' });
  };


  
  return (
    <form className='modalForm'>
      <div className='modalLogo'>
        <img src={LogoTaks} alt="logoTaks" />
        <p>New Task</p>
      </div>

      <span>Task name</span>
      <MyInput
        value={task.title}
        placeholder="Название"
        onChange={e => setTask({ ...task, title: e.target.value })}
      />
      <span>Taks discription</span>
      <MyInput
        value={task.body}
        placeholder="Описание"
        onChange={e => setTask({ ...task, body: e.target.value })}
      />

      <MyButton onClick={addTask}>
        Добавить
      </MyButton>

      
    </form>
  );
};

export default TaskForm;
