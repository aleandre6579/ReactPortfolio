import React, { Component } from 'react';
import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from 'framer-motion';
import Navbar from './navbar.jsx';
import Intro from './intro.jsx'
import About from './about.jsx'
import Skills from './skills.jsx'
import Projects from './projects.jsx'
import CV from './cv.jsx'

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode={'wait'}>
            <Routes key={location.pathname} location={location}>
                <Route path="/" element={<Intro/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/skills" element={<Skills/>} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/cv" element={<CV/>} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;