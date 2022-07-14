import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from '../pages/Homepage/Homepage';
import About from '../pages/About/About';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';

const Routing = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
        </>
    )
}

export default Routing