import React from 'react';

const TaskCard = ({task, data}) => {



    return (
        <div className='task_card'>
            <h4>{task.title}</h4>

            <p>{task.body}</p>

            <span>{data}</span>


        </div>
    );
};

export default TaskCard;