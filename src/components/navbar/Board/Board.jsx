import React, { useState } from 'react';
import Column from './Column'
import { STATUSES } from '../../../utils/tegas';

const Board = ({changeStatus, todos}) => {

    return (
        <div className='board-holder'>
            <Column todos={todos} status={STATUSES.TODO} title='To Do' changeStatus={changeStatus}/>
            <Column todos={todos} status={STATUSES.PROGRESS} title='In Progress' changeStatus={changeStatus}/>
            <Column todos={todos} status={STATUSES.DONE} title='done' changeStatus={changeStatus}/>
        </div>
    );
};

export default Board;