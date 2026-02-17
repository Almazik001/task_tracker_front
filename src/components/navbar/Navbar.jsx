import React, { useState } from 'react';
import LogoNavbar from '../../assets/logo_task_tracker.svg';
import MyButton from '../UI/MyButton/MyButton.jsx';

const Navbar = ({setModal}) => {


  return (
    <div className="navbar">
      <div className="navbar_logo">
        <img src={LogoNavbar} alt="logo" />
      </div>

      <MyButton onClick={() => setModal(true)} > 
        + Новая задача
      </MyButton>
    </div>
  );
};

export default Navbar;
