import React, { Component } from 'react';
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import selectedLanguage from './selectedLanguage.js'
import '../css/about.css';
import '../css/w3.css';

import backArrowWhite from '../imgs/backArrowWhite.png';
import backArrowBlack from '../imgs/backArrowBlack.png';
import englishFlag from '../imgs/englishFlag.png';
import frenchFlag from '../imgs/frenchFlag.png';

class About extends Component {
    
    componentDidMount() {
        document.body.style.overflow = 'visible';
        window.scrollTo(0,0);

        var allText = document.getElementsByClassName('txt');
        for(let i = 0; i < allText.length; i++) {
            if(!allText[i].classList.contains(selectedLanguage.selectedLanguage)) {
                allText[i].classList.add('hideTxt');
            }
        }
    }

    render() { 
        const navbar = {
            hidden: { opacity: 0 },
            show: { 
                opacity: 1,
                transition: {
                    staggerChildren: .4,
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
                x: -100,
            },
            show: {
                opacity: 1,
                x: 0,
                transition: {
                    duration: 1,
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
                y: -100,
                cursor: 'pointer',
            },
            show: {
                opacity: 1,
                transform: 'translate(0, 0px)',
                cursor: 'pointer',
                transition: {
                    duration: 1,
                },
            },
            exit: {
                opacity: 0,
                transform: 'translate(0, -50px)',
                cursor: 'context-menu',
                transition: {
                    duration: 0.2,
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

        const flagsMotion = {
            hidden: { opacity: 0 },
            show: { 
                opacity: 1,
                transition: {
                    staggerChildren: .25,
                    delay: 1.5,
                },
            },
            exit: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.2,
                },
            },
        }
        const flagMotion = {
            hidden: {
                opacity: 0,
                y: -150,
                cursor: 'pointer',
            },
            show: {
                opacity: 1,
                y: 0,
                cursor: 'pointer',
                transition: {
                    duration: 2.5,
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
        }

        function changeArrowToBlack() {
            document.getElementById('backArrow').src = backArrowBlack;
        }
        function changeArrowToWhite() {
            document.getElementById('backArrow').src = backArrowWhite;
        }

        function realPageDisappear() {
            var navbar_btns = document.getElementsByClassName('navbar-btn');
            for(let i = 0; i < navbar_btns.length; i++) {
                if(!navbar_btns[navbar_btns.length-1].classList.contains('hideTxt')) {
                    navbar_btns[navbar_btns.length-1].classList.add('navbar-btn-clicked');
                    navbar_btns[navbar_btns.length-1].classList.remove('navbar-btn');
                    console.log(navbar_btns[navbar_btns.length-1].classList.toString())
                }
            }
            
            var realPage = document.getElementById("realPage");
            realPage.classList.remove("realPage");
            realPage.classList.add("realPageDisappear");
        }

        function change_language(language_name) {
            selectedLanguage.selectedLanguage = language_name;
            var allText = document.getElementsByClassName('txt');
            for(let i = 0; i < allText.length; i++) {
                if(allText[i].classList.contains('hideTxt') && allText[i].classList.contains(language_name)) {
                    allText[i].classList.remove('hideTxt');
                }
                else if (!allText[i].classList.contains('hideTxt') && !allText[i].classList.contains(language_name)) {
                    allText[i].classList.add('hideTxt');
                }
            }
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
                            <m.div variants={navbar} initial="hidden" animate="show" exit="exit" className="sections-navbar english txt">
                                <m.div className='navbar-btn' variants={navItem} ><Link className='link' to='/about'><m.div variants={link} initial='hidden' animate='show' exit='exit'>About</m.div></Link></m.div>
                                <m.div onClick={realPageDisappear} className='navbar-btn' variants={navItem} ><Link className='link' to='/skills'><m.div className='navtxt' variants={link} initial='hidden' animate='show' exit='exit'>Skills</m.div></Link></m.div>
                                <m.div onClick={realPageDisappear} className='navbar-btn' variants={navItem} ><Link className='link' to='/projects'><m.div variants={link} initial='hidden' animate='show' exit='exit'>Projects</m.div></Link></m.div>
                            </m.div>    
                            <m.div variants={navbar} initial="hidden" animate="show" exit="exit" className="sections-navbar french txt">
                                <m.div className='navbar-btn' variants={navItem} ><Link className='link' to='/about'><m.div variants={link} initial='hidden' animate='show' exit='exit'>A propos</m.div></Link></m.div>
                                <m.div onClick={realPageDisappear} className='navbar-btn' variants={navItem} ><Link className='link' to='/skills'><m.div variants={link} initial='hidden' animate='show' exit='exit'>Compétences</m.div></Link></m.div>
                                <m.div onClick={realPageDisappear} className='navbar-btn' variants={navItem} ><Link className='link' to='/projects'><m.div variants={link} initial='hidden' animate='show' exit='exit'>Projets</m.div></Link></m.div>
                            </m.div>
                            <m.div className='flags' variants={flagsMotion} initial="hidden" animate="show" exit="exit" >
                                <m.div variants={flagMotion} to='/'><img onClick={() => change_language('french')} id='frenchFlag' className='flag' src={frenchFlag} alt=''></img></m.div>
                                <m.div variants={flagMotion} to='/'><img onClick={() => change_language('english')} id='englishFlag' className='flag' src={englishFlag} alt=''></img></m.div>
                            </m.div>

                        </div>

                        <m.div className='about-content' variants={content} initial="hidden" animate="show" exit="exit">
                            <h1 className='aboutMainHead bigHead'>
                                <strong className='english txt'>Hey, I'm Alex!</strong>
                                <strong className='french txt'>Salut, moi c'est Alex!</strong>                            
                            </h1>
                            <p className='aboutTxt'>
                                <div className="txt english">
                                    A French <strong>Computer Science</strong> student currently in my 3rd year at
                                    the univeristy known as <strong>MUIC</strong> ("Mahidol University International College"), one of the most
                                    prestigious universities in Thailand.
                                </div>
                                <div className="txt french">
                                    Un étudiant français en troisième année d'étude en informatique a l'université connu sous le nom de "MUIC"
                                    ("Mahidol Univserity International College"), une des universités les plus prestigieuses de Thaïlande.
                                </div>
                            </p>

                            <div className="flex-center">
                                <div className='resumeTxt english txt'>
                                    <Link style={{textDecoration: 'none'}} to='/cv'>Curriculum Vitae</Link>
                                </div>
                                <div className='resumeTxt french txt'>
                                    <Link style={{textDecoration: 'none'}} to='/cv'>Curriculum Vitae</Link>
                                </div>
                            </div>

                            <h1 className='english txt aboutHead bigHead'>My Accomplishments</h1>
                            <h1 style={{width: "600px"}} className='french txt aboutHead bigHead'>Mes Accomplissements</h1>
                            <p className='aboutTxt'>
                                <div className="english txt">
                                    I graduated from the French school known as <strong>LFIB</strong> ("French International School of Bangkok"), located in Bangkok, Thailand, 
                                    with an overall grade of <strong>18.2/20</strong> (not comparable to a GPA from the American education system). <br/>
                                    I taught myself <strong>Unity and C#</strong> at the age of 16 and I've been making small games with Unity since then.<br/>
                                    I am now working towards a Computer Science bachelor's degree at <strong>MUIC</strong> with a current GPA of  <strong>3.78/4</strong>.<br/>
                                    I am also undertaking a <strong>Film Arts</strong> minor at MUIC.<br/>
                                </div>
                                <div className="french txt">
                                    J'ai passé mon baccalauréat scientifique au Lycée Français International de Bangkok (aussi appele "LFIB") en Thailand avec une note de 18,28/20 et
                                    une mention "Très Bien". <br/>
                                    J'ai appris Unity et le C# à 16 ans grâce a des cours en ligne, et je continue encore aujourd'hui à créer des petits jeux pour approfondir mon savoir-faire.<br/>
                                    En ce moment j'étudie dans l'université de MUIC pour obtenir un diplôme de bachelor avec, pour le moment, une note moyenne globale (appelé GPA en anglais)
                                    de 3.78/4. <br/>
                                    Je travaille aussi, en parallèle de mon bachelor en Informatique, vers un sous-diplôme dans la cinématographie.
                                </div>
                            </p>

                            <h1 className='aboutHead smallHead'>My Goals</h1>
                            <p className='aboutTxt'>
                            <div className="english txt">
                                    When it comes to my career, the jobs I am interested in are <strong>video game developer</strong>, 
                                    <strong> software enginner</strong> and <strong>full-stack developer</strong>.
                                    However I am captivated by most things in computer science so I am open to other job opportunities.
                                </div>
                                <div className="french txt">
                                    Si je devais choisir, voici les trois métiers qui m'intéressent le plus en ce moment: développeur de jeux vidéo,
                                    ingénieur logiciel et développeur full-stack. 
                                    En revanche, je suis intéressé par beaucoup de domaines dans l'informatique même si je ne voudrais pas forcément en faire mon métier.

                                </div>
                            </p>

                            <h1 className='aboutHead smallHead'>My Hobbies</h1>
                            <p className='aboutTxt'>
                            <div className="english txt">
                                    Making video games with Unity was the <strong>initial excitement</strong> that made me love to code. I will
                                    always be making my own games as a hobby. <br/>
                                    I then learned that I loved to try understand and solve <strong>any kind of programming problem</strong> and elaborating a <strong>well-written
                                    solution</strong> to them. <br/>
                                    I have also always loved anything that touches <strong>storytelling</strong> in any way.<br/>
                                    I love to dive into impressive and creative works of art, especially well-written <strong>novels</strong> and well-designed <strong>video games</strong>, which I 
                                    am currently learning to make, with plans of making my own novels and games in the future.
                                </div>
                                <div className="french txt">
                                    Créer des jeux vidéo avec Unity était l'enthousiasme initial qui m'a fait aimer le code. Mon passe-temps principal sera toujours de coder
                                    mes propres jeux. <br/>
                                    J'ai ensuite découvert que j'adorais comprendre et résoudre toutes sortes de problèmes de code puis d'élaborer un algorithme de solution simple et
                                    concis pour y répondre.<br/>
                                    De plus, j'ai toujours aimé tout ce qui touche à la narration. C'est une passion pour moi de plonger dans des œuvres d'art impressionnantes et originales, en particulier
                                    des jeux vidéo amusants et des romans bien écrits, pour en apprendre plus sur leur création, avec l'intention d'en créer 
                                    mes propres à l'avenir.
                                </div>
                            </p>

                        </m.div>  
                    </div>
                </m.div>
            </div>
        );
    }
}
 
export default About;