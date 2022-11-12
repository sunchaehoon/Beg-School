import React from 'react';
import { Route,  Routes } from "react-router-dom";
import Main from './components/Main/Main';
import Api from './components/setApi/Api';
import SignUp from './components/SignUp/SignUp';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Api" element={<Api />} />
            <Route path="/SignUp" element={<SignUp />} />
        </Routes>
    );
};

export default Router;