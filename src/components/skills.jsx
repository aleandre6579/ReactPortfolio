import React, { Component } from 'react';
import '../css/intro.css'
import '../css/w3.css'

class Intro extends Component {
    state = {  

    } 
    render() { 
        return (
            <div className="w3-display-container w3-center blue-section">
                    <div className="w3-container w3-text-white w3-padding-32 w3-hide-small">
                        <h3>Alexandre Simon</h3>
                        <p><b>Software Developer</b></p> 
                    </div>
            </div>
        
        );
    }
}
 
export default Intro;