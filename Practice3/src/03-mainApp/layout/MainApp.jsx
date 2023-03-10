import React from 'react';
import {  Route, Routes } from  'react-router-dom'
import { NavBar } from '../components/NavBar';
import { AboutPage } from './AboutPage';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';

export const MainApp = () => {
    return (
        <>
        <h1>MainApp</h1>
        <hr />

        <NavBar/>

        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
        </Routes>
        </>
    )
};
