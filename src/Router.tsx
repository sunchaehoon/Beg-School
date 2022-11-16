import React from 'react';
import { Route,  Routes } from "react-router-dom";
import Main from './components/Main/Main';
import SignUp from './components/SignUp/SignUp';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/SignUp" element={<SignUp />} />
        </Routes>
    );
};

export default Router;