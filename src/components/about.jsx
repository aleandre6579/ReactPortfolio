import React, { Component } from 'react';
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import '../css/about.css';
import '../css/w3.css';
import backArrowWhite from '../imgs/backArrowWhite.png';
import backArrowBlack from '../imgs/backArrowBlack.png';

class About extends Component {
    componentDidMount() {
        document.body.style.overflow = 'visible';
        window.scrollTo(0,0);
    }

    render() { 
        const navbar = {
            hidden: { opacity: 0 },
            show: { 
                opacity: 1,
                transition: {
                    staggerChildren: 0.3,
                },
            },
            exit: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.2,
                },
            },
        };

        const navArrow = {
            hidden: {
                opacity: 0,
                x: -50,
            },
            show: {
                opacity: 1,
                x: 0,
                transition: {
                    duration: 0.2,
                },
            },
            exit: {
                opacity: 1,
                x: -150,
                transition: {
                    duration: 0.2,
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
                    duration: 0.5,
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
                    duration: 0.5,
                    delay: 0.75,
                    ease: "easeIn"
                },
            },
            exit: {
                opacity: 0,
                transition: {
                    duration: 0.5,
                    ease: "easeOut"
                },
            },
        };

        function changeArrowToBlack() {
            document.getElementById('backArrow').src = backArrowBlack;
        }
        function changeArrowToWhite() {
            document.getElementById('backArrow').src = backArrowWhite;
        }
        
        return (
            <m.div className='realPage'> 
                <m.div className="page"
                    initial={{backgroundPosition: '0% 0%'}}
                    animate={{backgroundPosition: '0% 60%'}}
                    transition={{duration: 1}}
                    exit={{backgroundPosition: '0% 0%'}}
                />
                <div className="navbar">
                    <m.div onMouseLeave={changeArrowToBlack} onMouseEnter={changeArrowToWhite} className='arrow-btn' variants={navArrow} initial="hidden" animate="show" exit="exit" >
                        <Link to='/'><img id='backArrow' className='arrowBack' src={backArrowBlack} alt=''></img></Link>
                    </m.div>
                    <m.div variants={navbar} initial="hidden" animate="show" exit="exit" className="sections-navbar">
                        <m.div className='navbar-btn' variants={navItem} ><Link style={{"text-decoration": "none"}} to='/about'><div>About</div></Link></m.div>
                        <m.div className='navbar-btn' variants={navItem} ><Link style={{"text-decoration": "none"}} to='/skills'><div>Skills</div></Link></m.div>
                        <m.div className='navbar-btn' variants={navItem} ><Link style={{"text-decoration": "none"}} to='/projects'><div>Projects</div></Link></m.div>
                      </m.div>
                </div>

                <m.div variants={content} initial="hidden" animate="show" exit="exit">
                    <h1 className='aboutMainHead bigHead'><strong>Hey, I'm Alex!</strong></h1>
                    <p className='aboutTxt'>
                        A French <strong>Computer Science</strong> student currently in my 3rd year at
                        MUIC ("Mahidol University International College") in Bangkok, Thailand.
                    </p>

                    <h1 className='aboutHead bigHead'>My Accomplishments</h1>
                    <p className='aboutTxt'>
                        I graduated from LFIB ("Lycee Francais International de Bangkok"), a French highschool in Bangkok, with <strong>18.2/20</strong>. <br/>
                        I taught myself <strong>Unity and C#</strong> at the age of 16 and I've been making small games with Unity since then.<br/>
                        I am now working towards a Computer Science bachelors degree at MUIC ("Mahidol University International College"), one of the most
                        prestigious universities in Thailand, with a current GPA of  <strong>3.78/4</strong>.<br/>
                        I am also undertaking a <strong>Film Arts</strong> minor at MUIC.<br/>
                    </p>

                    <h1 className='aboutHead smallHead'>My Goals</h1>
                    <p className='aboutTxt'>
                        When it comes to my career, the jobs I am interested in are <strong>video game developer</strong>, 
                        <strong> software enginner</strong> and <strong>full-stack developer</strong>.
                        However I am captivated by most things in computer science so I am open to many job opportunities.
                    </p>

                    <h1 className='aboutHead smallHead'>My Hobbies</h1>
                    <p className='aboutTxt'>
                        I love anything that touches <strong>storytelling</strong> in any way, but I also love the thrill of <strong>solving complicated problems</strong>.
                        <br/>
                        I love to dive into impressive and creative works of art, especially well-written <strong>novels</strong> and <strong>video games</strong>, which I 
                        am currently learning to make, with plans of making my own novels and games in the future.
                    
                    </p>

                </m.div>            
            </m.div>
        );
    }
}
 
export default About;