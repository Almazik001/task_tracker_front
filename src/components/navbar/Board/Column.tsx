import React from 'react';
import TaskCard from './TaskCard';

const Column = ({title, tasks, status}) => {

const filteredTasks = tasks.filter(task => task.status === status)

    return (
        <>
       <div className="board-holder-line ">
            <div className="column-header">
                <h3>{title}</h3>
            </div>

            <div className={`column column--${status}`} >
                <div className='column-header-line'>
                    {filteredTasks.map(task => (
                        <TaskCard key={task.id} task={task}  />
                    ))}
                </div>
            </div>
       </div>
        </>
    );
};

export default Column;