import Column from './Column';

const Board = ({ tasks, changeStatus, removeTask }) => {
  return (
    <div className="board">
      <Column title="To Do" status="todo" tasks={tasks} changeStatus={changeStatus} removeTask={removeTask}/>
      <Column title="In Progress" status="progress" tasks={tasks} changeStatus={changeStatus} removeTask={removeTask}/>
      <Column title="Done" status="done" tasks={tasks} changeStatus={changeStatus} removeTask={removeTask}/>
    </div>
  );
};

export default Board;
