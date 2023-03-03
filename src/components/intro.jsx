import React, { Component, useEffect } from 'react';
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { App } from "../App.js"

import '../css/intro.css'
import '../css/w3.css'

class Intro extends Component {
    componentDidMount() {
        document.documentElement.style.overflow = "auto";
        document.documentElement.style.overflowX = "hidden";
    }

    render() { 


        function circleBtnClicked(btnName) {
            console.log(btnName);
            var btn_panel = document.getElementById(btnName);
            btn_panel.classList.add("click-anim");
            
            // Hide scroll bar and prevent scrolling
            document.documentElement.style.overflow = "hidden";
        }

        function handleOnMouseMove(e) {
            
            const { currentTarget: target } = e;

            const rect = target.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;
            
            target.style.setProperty("--mouse-x", x + 'px');
            target.style.setProperty("--mouse-y", y + 'px');
        }

        return (
            <m.div id='root'
              initial={{opacity: 1}}
              animate={{opacity:1}}
              transition={{duration: 2, ease: "easeOut"}}
              exit={{opacity:1}}
            >
                <div className="title-section">
                    <div className="title">
                        <div className="name">Alexandre Simon</div>
                    </div>
                    <div className="subtitle">
                        <div className="software-dev">Software Developer</div>
                    </div>
                </div>

                <div className="section about-section">
                    <Link to='/about'>
                        <div onMouseMove={(e) => handleOnMouseMove(e)} onClick={() => circleBtnClicked("btn1")} className="about-btn btn-container">
                            <div id="btn1"></div>
                            <div className="btn-content">About</div>
                        </div>
                    </Link>
                    <div className="description">
                        Hello, my name is Alexandre Simon. I am currently
                        studying at Mahidol University in Bangkok, Thailand.
                    </div>
                </div>
                <div className="section skills-section">
                    <div className="description">
                        Hello, my name is Alexandre Simon. I am currently
                        studying at Mahidol University in Bangkok, Thailand.
                    </div>
                    <Link to='/skills'>
                        <div onMouseMove={(e) => handleOnMouseMove(e)} onClick={() => circleBtnClicked("btn2")} className="skills-btn btn-container">
                            <div id="btn2"></div>
                            <div className="btn-content">Skills</div>
                        </div>
                    </Link>
                </div>
                <div className="section projects-section">
                    <Link to='/projects'>
                        <div onMouseMove={(e) => handleOnMouseMove(e)} onClick={() => circleBtnClicked("btn3")} className="projects-btn btn-container">
                            <div id="btn3"></div>
                            <div className="btn-content">Projects</div>
                        </div>
                    </Link>
                    <div className="description">
                        Hello, my name is Alexandre Simon. I am currently
                        studying at Mahidol University in Bangkok, Thailand.
                    </div>
                </div>
            </m.div>
        
        );
    }
}
 
export default Intro;