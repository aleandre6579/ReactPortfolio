import React, { Component, useEffect } from 'react';
import { backInOut, easeInOut, motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { App } from "../App.js"

import '../css/intro.css'
import '../css/w3.css'

import gitLogo from '../imgs/gitLogo.png';
import gmailLogo from '../imgs/gmailLogo.png';
import linkedinLogo from '../imgs/linkedinLogo.png';

class Intro extends Component {
    componentDidMount() {
        document.documentElement.style.overflow = "hidden";
        document.documentElement.style.overflowX = "hidden";
    }

    render() { 
        var root = document.querySelector(':root');
        var rootStyles = getComputedStyle(root);

        const btnsMotion = {
            hidden: {
                color: 'rgba(84, 88, 194, 0)',
            },
            show: {
                color: 'rgba(84, 88, 194, 1)',
                transition: {
                    duration: 4,
                    delay: 3.5,
                }
            },
        };

        const btnMotion = {
            hidden: {
                opacity: 0,
                backgroundColor: 'white',
                boxShadow: '0 0px 5px white',
                color: 'var(--purple)',
                width: '5em',
            },
            show: {
                opacity: 1,
                backgroundColor: 'white',
                boxShadow: '0 0px 5px white',
                color: 'var(--purple)',
                width: '5em',
                transition: {
                    duration: 0.3,
                }
            },
            hover: {
                backgroundColor: 'var(--purple)',
                boxShadow: '0 0px 50px var(--purple)',
                color: 'white',
                width: 'clamp(5em, 70%, 10em)',
                transition: {
                    duration: 0.3,
                }
            }
        };

        const pathAppear = {
            hidden: { 
                pathLength: 0,
                opacity: 0,
                fill: 'rgba(255, 255, 255, 0)',
            },
            show: { 
                opacity: 1,
                fill: 'rgba(255, 255, 255, 1)',
                pathLength: 1,
                transition: {
                    delay: 1.5,
                    duration: 2,
                    fill: {delay: 3, duration: 2}
                }    
            },
        }

        const contactBar = {
            hidden: { left: '-20px', width: '0%' },
            visible: {
              left: '0px',
              width: '100%',
              transition: {
                delay: 3,
                ease: 'easeInOut',
                duration: 2,
                delayChildren: 5,
                staggerChildren: 0.2
              }
            }
          }
            
        const contactBtn = {
            hidden: { y: 20, opacity: 0, rotate: 180 },
            visible: {
              y: 0,
              opacity: 1,
              rotate: 360,
            }
        }

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

                    <m.div variants={btnsMotion} initial="hidden" animate="show" className='btns'>
                        <m.div variants={btnMotion} whileHover="hover" exit="exit" id='btn1' onClick={() => circleBtnClicked('btn1')} className='btn about-btn' ><Link style={{"textDecoration": "none"}} to='/about'><div className="btn-txt">About</div></Link>
                            <m.svg className='svg'>
                                <m.rect
                                    variants={pathAppear} initial="hidden" animate="show"
                                    x="5"
                                    y="6"
                                    rx='50' ry='50' width='5em' height='1.48em'
                                    
                                ></m.rect>
                            </m.svg>
                        </m.div>
                        <m.div variants={btnMotion} whileHover="hover" exit="exit" id='btn2' onClick={() => circleBtnClicked('btn2')} className='btn skills-btn'><Link style={{"textDecoration": "none"}} to='/skills'><div className="btn-txt">Skills</div></Link>
                            <m.svg className='svg'>
                                <m.rect
                                    variants={pathAppear} initial="hidden" animate="show"
                                    x="5"
                                    y="6"
                                    rx='50' ry='50' width='5em' height='1.47em'
                                ></m.rect>
                            </m.svg>
                        </m.div>
                        <m.div variants={btnMotion} whileHover="hover" exit="exit" id='btn3' onClick={() => circleBtnClicked('btn3')} className='btn projects-btn'><Link style={{"textDecoration": "none"}} to='/projects'><div className="btn-txt">Projects</div></Link>
                            <m.svg className='svg'>
                                <m.rect
                                    variants={pathAppear} initial="hidden" animate="show"
                                    x="5"
                                    y="6"
                                    rx='50' ry='50' width='5em' height='1.47em'
                                ></m.rect>
                            </m.svg>
                        </m.div>
                    </m.div>

                    <m.div className='contactBar'
                        variants={contactBar}
                        initial="hidden" animate="visible"
                    >
                        <m.div variants={contactBtn} className="contactTxt">Contact me here</m.div>
                        <m.img id='gitBtn' variants={contactBtn} className='contactBtn' src={gitLogo}/>
                        <m.img id='gitBtn' variants={contactBtn} className='contactBtn ' src={linkedinLogo}/>
                        <m.img id='gitBtn' variants={contactBtn} className='contactBtn' src={gmailLogo}/>
                    </m.div>

                </div>
            </m.div>
        );
    }
}
 
export default Intro;