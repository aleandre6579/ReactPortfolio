import React, { Component } from 'react';
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Navbar from './navbar.jsx'
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


        function realPageDisappear() {
            var navbar_btns = document.getElementsByClassName('navbar-btn');
            let i = 0;
            while (navbar_btns.length > 3) {
                if (navbar_btns[i].parentElement.classList.contains('hideTxt')) {
                    i++;
                    continue;
                }
                navbar_btns[i].classList.add('navbar-btn-clicked');
                navbar_btns[i].classList.remove('navbar-btn');
            }

            var realPage = document.getElementById("realPage");
            realPage.classList.remove("realPage");
            realPage.classList.add("realPageDisappear");
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
                    <div className="scrollbar">
                        <Navbar page="about"/>

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
                                    Un étudiant français en troisième année d'étude en informatique à l'université connue sous le nom de "MUIC"
                                    ("Mahidol Univserity International College"), une des universités les plus prestigieuses de Thaïlande.
                                </div>
                            </p>
                            <br /><br />
                            <div className="flex-center">
                                <div className='resumeTxt english txt'>
                                    <Link onClick={realPageDisappear} style={{ textDecoration: 'none' }} to='/cv'>Curriculum Vitae</Link>
                                </div>
                                <div className='resumeTxt french txt'>
                                    <Link onClick={realPageDisappear} style={{ textDecoration: 'none' }} to='/cv'>Curriculum Vitae</Link>
                                </div>
                            </div>

                            <h1 className='english txt aboutHead smallHead'>My Education</h1>
                            <h1 className='french txt aboutHead bigHead'>Parcours éducatif</h1>
                            <p className='aboutTxt'>
                                <div className="english txt">
                                    I graduated from the French school known as <strong>LFIB</strong> ("French International School of Bangkok"), located in Bangkok, Thailand,
                                    with an overall grade of <strong>18.2/20</strong> (not comparable to a GPA from the American education system). <br /><br />
                                    I taught myself <strong>Unity and C#</strong> at the age of 16 and I've been making small games with Unity since then.<br /><br />
                                    I am now working towards a Computer Science bachelor's degree at <strong>MUIC</strong> with a current GPA of  <strong>3.78/4</strong>.<br />
                                    I am also undertaking a <strong>Psychologie</strong> minor at MUIC.<br />
                                </div>
                                <div className="french txt">
                                    J'ai passé mon baccalauréat scientifique au <strong>Lycée Français International de Bangkok</strong> (aussi appelé "LFIB") en Thaïlande avec une note de <strong>18,28/20</strong> et
                                    une mention "Très Bien". <br /><br />
                                    J'ai appris <strong>Unity et le langage C#</strong> à 16 ans grâce à des cours en ligne, et je continue encore aujourd'hui à créer des petits jeux pour approfondir mon savoir-faire.<br />
                                    En ce moment j'étudie dans l'université de <strong>MUIC</strong> pour obtenir un diplôme de Bachelor avec, pour le moment, une note moyenne globale (appelée GPA en anglais)
                                    de <strong>3.78/4</strong>. <br /><br />
                                    Je travaille aussi, en parallèle de mon Bachelor en Informatique, vers un sous-diplôme en <strong>psychologie</strong>.
                                </div>
                            </p>

                            <h1 className='aboutHead smallHead english txt'>My Goals</h1>
                            <h1 className='aboutHead smallHead french txt'>Mes objectifs</h1>
                            <p className='aboutTxt'>
                                <div className="english txt">
                                    When it comes to my career, the jobs I am most interested in are <strong>video game developer</strong>
                                    and <strong>full-stack developer</strong>.
                                    However I am captivated by most things in computer science so I am open to other job opportunities.
                                </div>
                                <div className="french txt">
                                    En ce qui concerne ma carrière, les métiers qui me passionnent le plus sont <strong>développeur de jeux vidéo </strong>
                                    et <strong>développeur full-stack</strong>.
                                    Mais je reste interessé par toutes les activités dans le domaine de l'informatique, je suis donc ouvert à d'autres opportunités d'emploi.
                                </div>
                            </p>

                            <h1 className='aboutHead smallHead english txt'>My Hobbies</h1>
                            <h1 className='aboutHead smallHead french txt'>Mes passions</h1>
                            <p className='aboutTxt'>
                                <div className="english txt">
                                    Making video games with Unity was the <strong>initial excitement</strong> that made me love to code. I will
                                    always be making my own games as a hobby. <br /><br />
                                    I then learned that I loved to try understand and solve <strong>any kind of programming problem</strong> and elaborating a <strong>well-written
                                        solution</strong> to them. <br /><br />
                                    I have also always loved anything that touches <strong>storytelling</strong> in any way.<br />
                                    I love to dive into impressive and creative works of art, especially well-written <strong>novels</strong> and well-designed <strong>video games</strong>, which I
                                    am currently learning to make, with plans of making my own novels and games in the future.
                                </div>
                                <div className="french txt">
                                    Créer des jeux vidéo avec Unity était <strong>l'enthousiasme initial</strong> qui m'a fait aimer le code. Mon passe-temps principal sera toujours de coder
                                    mes propres jeux. <br /><br />
                                    J'ai ensuite découvert que j'adorais comprendre et résoudre <strong>toutes sortes de problèmes de code</strong> puis d'élaborer un algorithme de solution <strong>simple et
                                        concis</strong> pour y répondre.<br /><br />
                                    De plus, j'ai toujours aimé tout ce qui touche à la <strong>narration</strong>. C'est une passion pour moi de plonger dans des œuvres d'art impressionnantes et originales, en particulier
                                    des <strong>jeux vidéo</strong> amusants et des <strong>romans</strong> bien écrits, pour en apprendre plus sur leur création, et avec l'intention d'en créer moi-même
                                    à l'avenir.
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