import React from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import AnimatedRoutes from './components/animatedRoutes.jsx'
import './App.css';
import "./fonts/NavBtnTxt.otf"
import "./fonts/JosefinSans.ttf"


function App() {
  return (
    <React.StrictMode>
      <Router basename='/ReactPortfolio'>
        <AnimatedRoutes/>
      </Router>
    </React.StrictMode>
  );

}

export default App;
