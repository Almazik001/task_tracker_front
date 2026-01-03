import React from 'react';
import LogoNavbar from '../../assets/logo_task_tracker.svg'

const navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar_logo">
                <img src={LogoNavbar} alt="" />
            </div>

            <button className='navbar_btn'>New Task</button>
        </div>
    );
};

export default navbar;