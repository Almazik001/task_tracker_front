import React from 'react';
import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/loginPage';
import { Router, Route } from 'react-router';

const Routers = () => {
    return (
        <div>
        <Router>
            <Route element={сюда надо сделать что то}>
                <Route path="register" element={<RegisterPage />} />
                <Route path="login" element={<LoginPage />}></Route>
            </Route>
        </Router>
        </div>
    );
};

export default Routers;