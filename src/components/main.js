import React from 'react';
import '../App.css';

import { ReactComponent as Logo }  from '../images/dev_illu_levitating.svg'
import { ReactComponent as Plant1 }  from '../images/plant1.svg'
import { ReactComponent as Plant2 }  from '../images/plant2.svg'
import { ReactComponent as Planet1 }  from '../images/planet1.svg'
import { ReactComponent as Planet2 }  from '../images/planet2.svg'
import { ReactComponent as Star }  from '../images/star.svg'
import { ReactComponent as Headset }  from '../images/headset.svg'
import { Fade } from "react-awesome-reveal";

import styled from 'styled-components';
const Section = styled.div`

height : 100vh;
background-color: #110c2d;
font-family: Montserrat;
scroll-snap-align: center;
position:relative;
z-index:2;
overflow:hidden;

`

const MainPage = ()=> {

    return (
      <Section >
        <header className='header'>
          <nav>
            <ul>
              
              <li><a href="#experience-section">Experience</a></li>
              <li><a href="#about-me-section">About Me</a></li>
            </ul>
          </nav>
        </header>
        <main>
        <Fade>
          <div className='main'>
          
          <div className='interduction'>
          
          <div>
            <h1 className='title'>Hi! I'm Vivienne </h1>
          </div>
          <div className='subtitle-div'>
            <p className='subtitle'>Aspiring Developer & Artist :)</p>
          </div>
          <div className='interduction-txt-div'>
            <p className='interduction-text'>Since completing my apprenticeship this year im looking forward to getting to know the IT industry and improving my skills as a developer. 
            I created this little website to show you a glimbs of my creative mind. </p>
          </div>
          <div>
          <a href="#contact-section">
            <button className='btn1'>Contact</button>
            </a>
          </div>
          
          </div>
          
        
          <div className='parent'>
          
          <div className='div_plant2'><Plant2 className='plant2'/></div>
          <div className='div_plant1'><Plant1 className='plant1'/></div>
          <div className='div_planet2'><Planet2 className='planet2'/></div>
          <div className='div_planet1'><Planet1 className='planet1'/></div>
          <div className='div_svg'><Logo className='svg'/></div>
          <div className='div_star'><Star className='star'/></div>
          <div className='div_star2'><Star className='star2'/></div>
          <div className='div_star3'><Star className='star3'/></div>
          <div className='div_star4'><Star className='star4'/></div>
          <div className='div_headset'><Headset className='headset'/></div>
          
          </div>
          
      </div>
      </Fade>
        </main>
      </Section>
      
    );
  }
  
  export default MainPage;
  