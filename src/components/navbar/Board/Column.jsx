import TaskCard from './TaskCard';

const Column = ({ title, status, tasks, changeStatus }) => {
  return (
    <div className="column">
      <h3>{title}</h3>

      {tasks
        .filter(task => task.status === status)
        .map(task => (
          <TaskCard
            key={task.id}
            task={task}
            changeStatus={changeStatus}
          />
        ))}
    </div>
  );
};

export default Column;
