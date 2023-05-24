import React, { Component } from 'react';
import { motion as m } from "framer-motion";
import selectedLanguage from './selectedLanguage.js'
import Navbar from './navbar.jsx'

import '../css/cv.css';
import '../css/w3.css';
import englishCV from '../CV_English_PDF.pdf';
import frenchCV from '../CV_French_PDF.pdf';

class CV extends Component {

    componentDidMount() {
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
                transitionEnd: {
                    display: "none"
                }
            },
        };



        return (
            <div>
                <m.div className="page"
                    initial={{ backgroundPosition: '0% 0%' }}
                    animate={{ backgroundPosition: '0% 60%' }}
                    transition={{ duration: 1 }}
                    exit={{ backgroundPosition: '0% 0%' }}
                />
                <m.div variants={content} initial="hidden" animate="show" exit="exit" id="realPage" className='realPage'>
                    <Navbar/>


                    <div className='cv_img_parent'>
                        <object className='cv_img english txt' data={englishCV} type="application/pdf">
                            <p>Unable to display PDF file. <a href={englishCV}>Download</a> instead.</p>
                        </object>

                        <object href='src\CV_French_PDF.pdf' target='_blank' className='cv_img french txt' data={frenchCV} type="application/pdf">
                            <p>Unable to display PDF file. <a href={frenchCV}>Download</a> instead.</p>
                        </object>

                    </div>
                </m.div>
            </div>


        );
    }
}

export default CV;