import React, { Component } from 'react';
import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from 'framer-motion';
import Navbar from './navbar.jsx';
import Intro from './intro.jsx'
import About from './about.jsx'
import Skills from './skills.jsx'
import Projects from './projects.jsx'

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence initial={false} mode={"wait"}>
            <Routes location={location} key={location.pathName}>
                <Route exact path="/" element={<Intro/>} />
                <Route exact path="/about" element={<About/>} />
                <Route exact path="/skills" element={<Skills/>} />
                <Route exact path="/projects" element={<Projects/>} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;