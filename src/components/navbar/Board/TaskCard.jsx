import React from 'react';
import MyButton from '../UI/Mybutton/MyButton';
import Xicon from '../../../assets/X SVG Icon.svg'

const TaskCard = ({ task, changeStatus, removeTask }) => {

  

  return (
    <div className="task_card">
      <h4 className='task-title'>{task.title}</h4>
      <p className='task-subtitle'>{task.body}</p>
      <div className="task-delete">
        <img src={Xicon} alt="delete"  onClick={() => removeTask(task.id)}/>
      </div>

      <div className="button_card">
        {task.status === 'todo' && (
        <MyButton onClick={() => changeStatus(task.id, 'progress')}>
          В процесс
        </MyButton>
      )}

      {task.status === 'progress' && (
        <>
          <MyButton onClick={() => changeStatus(task.id, 'todo')}>
            Назад
          </MyButton>

          <MyButton onClick={() => changeStatus(task.id, 'done')} >
            Готово
          </MyButton>
        </>
      )}

      {task.status === 'done' && (
        <MyButton onClick={() => changeStatus(task.id, 'progress')}>
          Вернуть
        </MyButton>
      )}
      </div>
    </div>
  );
};

export default TaskCard;
