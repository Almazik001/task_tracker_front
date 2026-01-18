import Column from './Column';

const Board = ({ tasks, changeStatus }) => {
  return (
    <div className="board">
      <Column title="To Do" status="todo" tasks={tasks} changeStatus={changeStatus} />
      <Column title="In Progress" status="progress" tasks={tasks} changeStatus={changeStatus} />
      <Column title="Done" status="done" tasks={tasks} changeStatus={changeStatus} />
    </div>
  );
};

export default Board;
