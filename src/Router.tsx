import React from 'react';
import { Route,  Routes } from "react-router-dom";
import Cafeteria from './components/Cafeteria/Cafeteria';
import Main from './components/Main/Main';
import Schedule from './components/Schedule/Schedule';
import SignUp from './components/SignUp/SignUp';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Cafeteria" element={<Cafeteria />} />
            <Route path="/Schedule" element={<Schedule />} />
        </Routes>
    );
};

export default Router;