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
        const images = {};
        r.keys().forEach((item) => {
            images[item.replace("./", "")] = r(item);
        });
        return images;
    };

    const preloadImages = () => {
        const skillsImgs = importAll(
            require.context("../imgs/skills/", false, /\.(png|jpe?g|svg)$/)
        );
        const escapeImgs = importAll(
            require.context("../imgs/projects/escape/", false, /\.(png|jpe?g|svg)$/)
        );
        const fantasiaImgs = importAll(
            require.context("../imgs/projects/fantasia/", false, /\.(png|jpe?g|svg)$/)
        );
        const freebotImgs = importAll(
            require.context("../imgs/projects/freebot/", false, /\.(png|jpe?g|svg)$/)
        );
        const plightflightImgs = importAll(
            require.context("../imgs/projects/plightflight/", false, /\.(png|jpe?g|svg)$/)
        );
        const sortingImgs = importAll(
            require.context("../imgs/projects/sorting/", false, /\.(png|jpe?g|svg)$/)
        );
        const swarmboatsImgs = importAll(
            require.context("../imgs/projects/swarmbots/", false, /\.(png|jpe?g|svg)$/)
        );
        const warboatsImgs = importAll(
            require.context("../imgs/projects/warboats/", false, /\.(png|jpe?g|svg)$/)
        );
        const otherImgs = importAll(
            require.context("../imgs/", false, /\.(png|jpe?g|svg)$/)
        );
        const allImgs = skillsImgs + escapeImgs + fantasiaImgs + freebotImgs + plightflightImgs + sortingImgs + swarmboatsImgs + warboatsImgs + otherImgs;

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