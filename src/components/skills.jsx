import React, { Component } from 'react';
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import '../css/intro.css'
import '../css/w3.css'
import backArrowWhite from '../imgs/backArrowWhite.png';
import backArrowBlack from '../imgs/backArrowBlack.png';

class Skills extends Component {
    componentDidMount() {
        document.documentElement.style.overflow = "auto";
        window.scrollTo(0,0);
    }

    render() { 
        const navbar = {
            hidden: { opacity: 0 },
            show: { 
                opacity: 1,
                transition: {
                    staggerChildren: 0.2,
                },
            },
            exit: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.2,
                },
            },
        };

        const navItem = {
            hidden: {
                opacity: 0,
                y: -50,
            },
            show: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.4,
                },
            },
            exit: {
                opacity: 1,
                y: -150,
                transition: {
                    duration: 0.2,
                },
            },
        };

        const content = {
            hidden: {
                opacity: 0,
            },
            show: {
                opacity: 1,
                transition: {
                    duration: 1,
                    ease: "easeIn"
                },
            },
            exit: {
                opacity: 0,
                transition: {
                    duration: 1,
                    ease: "easeOut"
                },
            },
        };


        function circleBtnClicked(btnName) {
            console.log(btnName);
            var btn_panel = document.getElementById(btnName);
            btn_panel.classList.add("click-anim");
        }

        function changeArrowToBlack() {
            document.getElementById('backArrow').src = backArrowBlack;
        }
        function changeArrowToWhite() {
            document.getElementById('backArrow').src = backArrowWhite;
        }
        
        return (
            <m.div>
                <m.div variants={navbar} initial="hidden" animate="show" exit="exit" className="navbar">
                    <m.div onMouseLeave={changeArrowToBlack} onMouseEnter={changeArrowToWhite} className='navbar-btn' variants={navItem}>
                        <Link to='/'><img id='backArrow' className='arrowBack' src={backArrowBlack} alt=''></img></Link>
                    </m.div>
                    <m.div className='navbar-btn' variants={navItem} ><Link style={{"text-decoration": "none"}} to='/about'><div>About</div></Link></m.div>
                    <m.div className='navbar-btn' variants={navItem} ><Link style={{"text-decoration": "none"}} to='/skills'><div>Skills</div></Link></m.div>
                    <m.div className='navbar-btn' variants={navItem} ><Link style={{"text-decoration": "none"}} to='/projects'><div>Projects</div></Link></m.div>
                </m.div>

                <m.div variants={content} initial="hidden" animate="show" exit="exit">
                    <h1 className='aboutMainHead'>My Skills</h1>
                    <p className='aboutTxt'>
                        Hey there, nice to meet you! I'm Alexandre Simon, a French Computer Science student currently in my 3rd year at
                        Mahidol University in Bangkok, Thailand.
                    </p>

                    <h1 className='aboutHead'>My Hobbies</h1>
                    <p className='aboutTxt'>
                        I love anything that touches storytelling in any way, but I also love the thrill of solving complicated problems.
                        That's why the hobby I love the most is game development!
                        I love to dive into outstandingly creative works of art, especially well-written novels and video games, which I plan to make on my own in the future.
                    
                    </p>

                    <h1 className='aboutHead'>My Goals</h1>
                    <p className='aboutTxt'>
                        Hey there, nice to meet you! I'm Alexandre Simon, a French Copmuter Science student currently in my 3rd year at
                        Mahidol University in Bangkok, Thailand.
                    </p>
                </m.div>
            </m.div>
        );
    }
}
 
export default Skills;