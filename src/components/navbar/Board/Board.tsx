import React, { useState } from 'react';
import Column from './Column';

const Board = () => {

    const [tasks, setTasks] = useState([
            {id: 1, title: 'To Do', status: 'todo'},
            {id: 2, title: 'In progress', status: 'inprogress'},
            {id: 3, title: 'Done', status: 'done'},
    ]);

    return (
        <div className='board-holder'>
            <Column tasks={tasks}  status='todo' title='To Do' />
            <Column tasks={tasks}  status='inprogress' title='In Progress'/>
            <Column tasks={tasks}  status='done' title='done'/>
        </div>
    );
};

export default Board;