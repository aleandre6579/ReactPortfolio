import React, { Component } from 'react';
import '../css/intro.css'
import '../css/w3.css'

class Intro extends Component {
    state = {  

    } 
    render() { 
        return (
            <div className="w3-display-container w3-center white-section">
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Prata&display=swap" rel="stylesheet"></link>

                <div style={{position: 'relative'}} className="w3-container w3-padding-32 w3-hide-small">
                    <div className='alexandre'>Alexandre</div>
                    <div className="simon">Simon</div>
                    <div><span className='magic-txt'>Software Developer</span></div> 
                </div>
                <div className='btns'>
                    <div className='magic btn-container about-btn'>
                        <button className='circle-btn'>
                            about
                            </button>
                    </div>
                    <div className='magic btn-container skills-btn'>
                        <button className='circle-btn'>
                            skills
                        </button>
                    </div>
                    <div className='magic btn-container projects-btn'>
                        <button className='circle-btn'>
                            projects
                        </button>
                    </div>
                </div>
            </div>
        
        );
    }
}
 
export default Intro;