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

    const importAll = (r) =>  {
        console.log(r);
        const images = {};
        r.keys().forEach((item) => {
            images[item.replace("./", "")] = r(item);
        });
        return images;
    };

    const preloadImages = () => {
        console.log("preloading");
        const skillsImgs = importAll(
            require.context("../imgs/skills/", false, /\.(png|jpe?g|svg)$/)
        );
        const projectsImgs = importAll(
            require.context("../imgs/projects/", false, /\.(png|jpe?g|svg)$/)
        );
        const otherImgs = importAll(
            require.context("../imgs/", false, /\.(png|jpe?g|svg)$/)
        );
        const allImgs = skillsImgs + projectsImgs + otherImgs;

        Object.values(allImgs).forEach((image) => {
            const img = new Image();
            img.src = typeof image ==="string" ? image : image.default;
        });
    };

    React.useEffect(preloadImages, []);

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