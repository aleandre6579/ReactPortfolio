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
                cursor: 'pointer',
            },
            show: {
                opacity: 1,
                y: 0,
                cursor: 'pointer',
                transition: {
                    duration: 0.5,
                },
            },
            exit: {
                opacity: 0,
                y: -150,
                cursor: 'context-menu',
                transition: {
                    duration: 0.4,
                },
            },
        };

        const link = {
            hidden: {
                cursor: 'pointer',
            },
            show: {
                cursor: 'pointer',
            },
            exit: {
                cursor: 'context-menu',
            }
        }

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

        function realPageDisappear() {
            var navbar_btns = document.getElementsByClassName('navbar-btn');
            while(navbar_btns.length > 0) {
                navbar_btns[navbar_btns.length-1].classList.add('navbar-btn-clicked');
                navbar_btns[navbar_btns.length-1].classList.remove('navbar-btn');
            }
            
            var realPage = document.getElementById("realPage");
            realPage.classList.remove("realPage");
            realPage.classList.add("realPageDisappear");
        }

        
        return (
            <div>
                <m.div className="page"
                    initial={{backgroundPosition: '0% 0%'}}
                    animate={{backgroundPosition: '0% 60%'}}
                    transition={{duration: 1}}
                    exit={{backgroundPosition: '0% 0%'}}
                />
                    <m.div id="realPage" className='realPage'>
                    <div className="scrollbar">
                        <div className="navbar">
                            <m.div onMouseLeave={changeArrowToBlack} onMouseEnter={changeArrowToWhite} className='arrow-btn' variants={navArrow} initial="hidden" animate="show" exit="exit" >
                                <Link to='/'><img id='backArrow' className='arrowBack' src={backArrowBlack} alt=''></img></Link>
                            </m.div>
                            <m.div variants={navbar} initial="hidden" animate="show" exit="exit" className="sections-navbar">
                                <m.div className='navbar-btn' variants={navItem} ><Link style={{textDecoration: 'none'}} to='/about'><m.div variants={link} initial='hidden' animate='show' exit='exit'>About</m.div></Link></m.div>
                                <m.div onClick={realPageDisappear} className='navbar-btn' variants={navItem} ><Link style={{textDecoration: 'none'}} to='/skills'><m.div variants={link} initial='hidden' animate='show' exit='exit'>Skills</m.div></Link></m.div>
                                <m.div onClick={realPageDisappear} className='navbar-btn' variants={navItem} ><Link style={{textDecoration: 'none'}} to='/projects'><m.div variants={link} initial='hidden' animate='show' exit='exit'>Projects</m.div></Link></m.div>
                            </m.div>
                        </div>

                        <m.div variants={content} initial="hidden" animate="show" exit="exit">
                            <h1 className='aboutMainHead bigHead'><strong>Hey, I'm Alex!</strong></h1>
                            <p className='aboutTxt'>
                                A French <strong>Computer Science</strong> student currently in my 3rd year at
                                the univeristy known as <strong>MUIC</strong> ("Mahidol University International College") in 
                                Bangkok, Thailand.
                            </p>

                            <h1 className='aboutHead bigHead'>My Accomplishments</h1>
                            <p className='aboutTxt'>
                                I graduated from the French school known as <strong>LFIB</strong> ("Lycee Francais International de Bangkok"), located in Bangkok, Thailand, 
                                with an overall grade of <strong>18.2/20</strong> (not comparable to a GPA from the American education system). <br/>
                                I taught myself <strong>Unity and C#</strong> at the age of 16 and I've been making small games with Unity since then.<br/>
                                I am now working towards a Computer Science bachelor's degree at <strong>MUIC</strong>, one of the most
                                prestigious universities in Thailand, with a current GPA of  <strong>3.78/4</strong>.<br/>
                                I am also undertaking a <strong>Film Arts</strong> minor at MUIC.<br/>
                            </p>

                            <h1 className='aboutHead smallHead'>My Goals</h1>
                            <p className='aboutTxt'>
                                When it comes to my career, the jobs I am interested in are <strong>video game developer</strong>, 
                                <strong> software enginner</strong> and <strong>full-stack developer</strong>.
                                However I am captivated by most things in computer science so I am open to other job opportunities.
                            </p>

                            <h1 className='aboutHead smallHead'>My Hobbies</h1>
                            <p className='aboutTxt'>
                                Making video games with Unity was the <strong>initial excitement</strong> that made me love to code. I will
                                always be making my own games as a hobby. <br/>
                                I then learned that I loved to try understand and solve <strong>any kind of programming problem</strong> and elaborating a <strong>well-written
                                solution</strong> to them. <br/>
                                I have also always loved anything that touches <strong>storytelling</strong> in any way.<br/>
                                I love to dive into impressive and creative works of art, especially well-written <strong>novels</strong> and well-designed <strong>video games</strong>, which I 
                                am currently learning to make, with plans of making my own novels and games in the future.
                            </p>

                        </m.div>  
                        </div>
                    </m.div>
                </div>
        );
    }
}
 
export default About;