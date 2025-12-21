import React from 'react';

const TaskCard = ({task}) => {
    return (
        <div className='task_card'>
            <h4>{task.title}</h4>
            <p>ID: {task.id}</p>
        </div>
    );
};

export default TaskCard;