import React, { useState } from 'react';
import LogoNavbar from '../../assets/logo_task_tracker.svg';
import MyButton from './UI/Mybutton/MyButton.jsx';
import MyModal from './UI/MyModal/MyModal.jsx';
import TaskForm from '../TaskForm.jsx';

const Navbar = ({setModal}) => {


  return (
    <div className="navbar">
      <div className="navbar_logo">
        <img src={LogoNavbar} alt="logo" />
      </div>

      <MyButton onClick={() => setModal(true)}>
        + Новая задача
      </MyButton>
    </div>
  );
};

export default Navbar;
