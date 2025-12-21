import React from 'react';
import TaskCard from './TaskCard';

const Column = ({title, tasks, status}) => {

const filteredTasks = tasks.filter(task => task.status === status)

    return (
        <div>
            <h3>{title}</h3>

            {filteredTasks.map(task => (
                <TaskCard key={task.id} task={task}  />
            ))}
        </div>
    );
};

export default Column;