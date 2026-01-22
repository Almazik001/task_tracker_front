import TaskCard from './TaskCard';

const Column = ({ title, status, tasks, changeStatus, removeTask }) => {
  return (
    <div className="column">
      <div className="column-title">
        <h3>{title}</h3>
      </div>
      

      {tasks
        .filter(task => task.status === status)
        .map(task => (
            <TaskCard
              key={task.id}
              task={task}
              changeStatus={changeStatus}
              removeTask={removeTask}
            />
        ))}
    </div>
  );
};

export default Column;
