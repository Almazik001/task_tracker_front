import { useState } from 'react';
import MyButton from './navbar/UI/Mybutton/MyButton';
import MyInput from './navbar/UI/MyInput/MyInput'
import LogoTaks from '../assets/shape_logo.svg'

const TaskForm = ({ create, setModal }) => {
  
  const [task, setTask] = useState({title: '', body: ''});

  const addTask = (e) => {
    e.preventDefault();

    const newTask = {
      ...task, id: Date.now(),
      status: 'todo',
    }

    create(newTask)
    setTask({title: '', body: ''})
  }


  const cancel = () => {
    setTask({title: '', body: ''})
    setModal(false)
  }
  




  
  return (
    <form className='modalForm' onSubmit={addTask}>
      <div className='modalLogo'>
        <img src={LogoTaks} alt="logoTaks" />
        <p>New Task</p>
      </div>

      <span>Task name</span>
      <MyInput
        value={task.title}
        type='text'
        placeholder="Название"
        onChange={e => setTask({...task, title: e.target.value})}
      />
      <span>Taks discription</span>
      <MyInput
        value={task.body}
        type='text'
        placeholder="Описание"
        onChange={e => setTask({...task, body: e.target.value })}
      />

      <div className="form_button">
        <MyButton type="button" onClick={cancel}>
          Отменить
        </MyButton>

        <MyButton type="submit" >
          Добавить
        </MyButton>
      </div>

      
    </form>
  );
};

export default TaskForm;
