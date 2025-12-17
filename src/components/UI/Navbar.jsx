import React from 'react';
import LogoTracker from '../../assets/images/logo_task_tracker.svg'

const Navbar = () => {

    return (
        <div className='navbar'>
            <div className="navbar_logo">
                <img src={LogoTracker} alt="" />
            </div>

            <button className='navbar_btn'>+ New task</button>
        </div>
    );
};

export default Navbar;