import React, { Component, useEffect } from 'react';
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { App } from "../App.js"

import '../css/intro.css'
import '../css/w3.css'

class Intro extends Component {
    componentDidMount() {
        document.documentElement.style.overflow = "hidden";
        document.documentElement.style.overflowX = "hidden";
    }

    render() { 
        var root = document.querySelector(':root');
        var rootStyles = getComputedStyle(root);

        const selectedSection = {
            hidden: {
                top: '0px',
            },
            show: {
                top: '0px',
                transition: {
                    duration: 1,
                    ease: "easeIn"
                },
            },
            exit: {
/*                 transform: 'translateY(var(--translateAmt))',
 */                transition: {
                    duration: 1,
                    ease: [.5,-0.82,.48,1.7]
                },
            },
        };

        function circleBtnClicked(btnName) {
            var btn_panel = document.getElementById(btnName);
            btn_panel.classList.add("click-anim");

            for (let i = 1; i < 4; i++) {
                if('btn' + i !== btnName)
                    document.getElementById('btn' + i).classList.add("hide");
            }
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
            <m.div id='root2'
                initial={{opacity: 1}}
                animate={{opacity:1}}
                transition={{duration: 2}}
                exit={{opacity:1}}
          >
                <div className="title-section">
                    
                    <div className="title title-pos">
                        <div className="name">Alexandre Simon</div>
                    </div>
                    <div className="subtitle subtitle-pos">
                        <div className="software-dev">Software Developer</div>
                    </div>

                    <m.div className='btns'>
                        <m.div variants={selectedSection} initial="hidden" animate="show" exit="exit" id='btn1' onClick={() => circleBtnClicked('btn1')} className='btn about-btn' ><Link style={{"textDecoration": "none"}} to='/about'><div className="btn-txt">About</div></Link></m.div>
                        <m.div variants={selectedSection} initial="hidden" animate="show" exit="exit" id='btn2' onClick={() => circleBtnClicked('btn2')} className='btn skills-btn'><Link style={{"textDecoration": "none"}} to='/skills'><div className="btn-txt">Skills</div></Link></m.div>
                        <m.div variants={selectedSection} initial="hidden" animate="show" exit="exit" id='btn3' onClick={() => circleBtnClicked('btn3')} className='btn projects-btn'><Link style={{"textDecoration": "none"}} to='/projects'><div className="btn-txt">Projects</div></Link></m.div>
                    </m.div>

                </div>
            </m.div>
        );
    }
}
 
export default Intro;