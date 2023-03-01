import React, { Component } from 'react';
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";

import '../css/intro.css'
import '../css/w3.css'

class Intro extends Component {
    state = {  

    } 
    render() { 
        return (
            <div className="">
                <Link to="/"><h1 style={{color: "red"}}>PROJECTS</h1></Link>
            </div>
        
        );
    }
}
 
export default Intro;