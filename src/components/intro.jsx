import React, { Component } from 'react';
import '../css/intro.css'
import '../css/w3.css'

class Intro extends Component {
    state = {  

    } 
    render() { 
        return (
            <div className="w3-display-container w3-center white-section">
                    <div className="title w3-container w3-padding-32 w3-hide-small">
                        <div className="name">Alexandre Simon</div>
                        <div className="software-dev">Software Developer</div>
                    </div>
                    <div className="btns">
                        <div className="magic btn-container about-btn">
                            <div className="circle-btn-txt">About</div>
                        </div>
                        <div className="magic btn-container skills-btn">
                            <div className="circle-btn-txt">Skills</div>
                        </div>
                        <div className="magic btn-container projects-btn">
                            <div className="circle-btn-txt">Projects</div>
                        </div>
                    </div>
            </div>
        
        );
    }
}
 
export default Intro;