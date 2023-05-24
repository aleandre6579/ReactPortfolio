import React, { Component } from 'react';
import { motion as m } from "framer-motion";
import Skill from './skill.jsx'
import selectedLanguage from './selectedLanguage.js'
import Navbar from './navbar.jsx'
import '../css/about.css';
import '../css/skills.css';
import '../css/w3.css';


/* Container images */
import c from '../imgs/skills/c.png';
import cSharp from '../imgs/skills/cSharp.png';
import css from '../imgs/skills/css.png';
import html from '../imgs/skills/html.png';
import java from '../imgs/skills/javaLogo.png';
import js from '../imgs/skills/js.png';
import python from '../imgs/skills/pythonLogo.png';
import scala from '../imgs/skills/scalaLogo.png';

import react from '../imgs/skills/reactLogo.png';
import unity from '../imgs/skills/unityLogo.png';
import gitfork from '../imgs/skills/gitfork.png';
import jupyter from '../imgs/skills/jupyter.png';
import notion from '../imgs/skills/notionLogo.png';

import ambitious from '../imgs/skills/ambitious.png';
import creative from '../imgs/skills/creative.png';
import determined from '../imgs/skills/determined.png';
import solver from '../imgs/skills/solver.png';
import worker from '../imgs/skills/worker.png';

import team from '../imgs/skills/team.png';
import listener from '../imgs/skills/listener.png';
import communication from '../imgs/skills/communication.png';

class About extends Component {
    componentDidMount() {
        document.body.style.overflow = 'visible';
        window.scrollTo(0, 0);

        var allText = document.getElementsByClassName('txt');
        for (let i = 0; i < allText.length; i++) {
            if (!allText[i].classList.contains(selectedLanguage.selectedLanguage)) {
                allText[i].classList.add('hideTxt');
            }
        }

    }

    render() {

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


        function hasClass(element, className) {
            return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
        }

        function openContainer(containerNum) {
            var container = document.getElementById(containerNum);
            if (hasClass(container, 'openContainer')) {
                container.classList.add("container");
                container.classList.remove("openContainer");
            }
            else {
                container.classList.add("openContainer");
                container.classList.remove("container");
            }

        }

        return (
            <div>
                <m.div className="page"
                    initial={{ backgroundPosition: '0% 0%' }}
                    animate={{ backgroundPosition: '0% 60%' }}
                    transition={{ duration: 1 }}
                    exit={{ backgroundPosition: '0% 0%' }}
                />

                <m.div id="realPage" className='realPage'>
                    <Navbar page="skills"/>

                    <m.div variants={content} initial="hidden" animate="show" exit="exit" className="containersRow" >
                        <div className="containerSpace">
                            <div className="txt english containerTitle">Languages</div>
                            <div className="txt french containerTitle">Langages</div>
                            <div id='container1' onClick={() => openContainer('container1')} className="container container1">
                                <Skill num={11} name="c" img={c} lvlEnglish="Expert" lvlFrench="Expert"/>
                                <Skill num={17} name="python" img={python} lvlEnglish="Expert" lvlFrench="Expert"/>
                                <Skill num={15} name="java" img={java} lvlEnglish="Expert" lvlFrench="Expert"/>
                                <Skill num={12} name="cSharp" img={cSharp} lvlEnglish="Expert" lvlFrench="Expert"/>
                                <Skill num={14} name="html" img={html} lvlEnglish="Advanced" lvlFrench="Avancé"/>
                                <Skill num={13} name="css" img={css} lvlEnglish="Advanced" lvlFrench="Avancé"/>
                                <Skill num={16} name="js" img={js} lvlEnglish="Intermediate" lvlFrench="Intermédiaire"/>
                                <Skill num={18} name="scala" img={scala} lvlEnglish="Intermediate" lvlFrench="Intermédiaire"/>
                            </div>
                        </div>

                        <div className="containerSpace">
                            <div className="txt english containerTitle">Software & Frameworks</div>
                            <div className="txt french containerTitle">Applications & Outils</div>
                            <div id='container2' onClick={() => openContainer('container2')} className="container container2">
                                <Skill num={22} name="unity" img={unity} lvlEnglish="Expert" lvlFrench="Expert"/>
                                <Skill num={21} name="react" img={react} lvlEnglish="Advanced" lvlFrench="Avancé"/>
                                <Skill num={23} name="jupyter" img={jupyter} lvlEnglish="Advanced" lvlFrench="Avancé"/>
                                <Skill num={24} name="gitFork" img={gitfork} lvlEnglish="Advanced" lvlFrench="Avancé"/>
                                <Skill num={25} name="notion" img={notion} lvlEnglish="Advanced" lvlFrench="Avancé"/>
                            </div>
                        </div>
                    </m.div>

                    <m.div variants={content} initial="hidden" animate="show" exit="exit" className="containersRow">
                        <div className="containerSpace">
                            <div className="txt english containerTitle">Social Skills</div>
                            <div className="txt french containerTitle">Compétences Sociales</div>
                            <div id='container3' onClick={() => openContainer('container3')} className="container container3">
                                <Skill num={31} name="team" img={team} lvlEnglish="Good Teamwork" lvlFrench="Bon travail d'équipe"/>
                                <Skill num={32} name="listener" img={listener} lvlEnglish="Good Listener" lvlFrench="Très à l'écoute"/>
                                <Skill num={33} name="communication" img={communication} lvlEnglish="Good Communicator" lvlFrench="Bon communicant"/>
                            </div>
                        </div>

                        <div className="containerSpace">
                            <div className="txt english containerTitle">Personal Skills</div>
                            <div className="txt french containerTitle">Compétences Personnelles</div>
                            <div id='container4' onClick={() => openContainer('container4')} className="container container4">
                                <Skill num={41} name="ambitious" img={ambitious} lvlEnglish="Ambitious" lvlFrench="Ambitieux"/>
                                <Skill num={42} name="creative" img={creative} lvlEnglish="Creative" lvlFrench="Créatif"/>
                                <Skill num={43} name="determined" img={determined} lvlEnglish="Determined" lvlFrench="Déterminé"/>
                                <Skill num={44} name="solver" img={solver} lvlEnglish="Problem-solver" lvlFrench="Résolveur de problèmes"/>
                                <Skill num={45} name="worker" img={worker} lvlEnglish="Hardworking" lvlFrench="Travailleur"/>
                            </div>
                        </div>
                    </m.div>
                </m.div>
            </div>
        );
    }
}

export default About;