const Column = ({ title, status, todos, changeStatus }) => {
  
  const filtered = todos.filter(todo => todo.status === status);

  return (
    <div className="column">
      <h3>{title}</h3>

      {filtered.map(todo => (
        <div key={todo.id} className="task">
          <h4>{todo.title}</h4>
          <p>{todo.body}</p>

          {status === 'todo' && (
            <MyButton onClick={() => changeStatus(todo.id, 'progress')}>
              В процесс
            </MyButton>
          )}

          {status === 'progress' && (
            <>
              <MyButton onClick={() => changeStatus(todo.id, 'todo')}>
                Назад
              </MyButton>
              <MyButton onClick={() => changeStatus(todo.id, 'done')}>
                Готово
              </MyButton>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Column;
