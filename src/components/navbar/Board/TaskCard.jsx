import React from 'react';
import MyButton from '../UI/Mybutton/MyButton';

const TaskCard = ({ task, changeStatus }) => {

  

  return (
    <div className="task_card">
      <strong>{task.id}</strong>
      <h4>{task.title}</h4>
      <p>{task.body}</p>

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
          <MyButton onClick={() => changeStatus(task.id, 'done')}>
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
  );
};

export default TaskCard;
