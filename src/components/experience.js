import React, { useState } from 'react';
import styled from 'styled-components';
import { Canvas } from "react-three-fiber";
import {TextureLoader } from "three";
import myNormalMapTexture  from '../textures/Rain_normal-min.png'
import raincolorMap  from '../textures/Rain_color_random.png'
import { OrbitControls} from '@react-three/drei';
import Model from '../Scene';
import '../App.css';
import ReactLogo from '../images/react.png';
import SpringLogo from '../images/spring.png';
import Planet3 from '../images/planet_pink.png';

import Planet1 from'../images/planet1.svg'
import Planet2 from'../images/planet2.svg'
import Planet4 from'../images/pixel_earth.png'
import Brain from '../images/brain_full.png'
import ThreeLogo from '../images/three.png';
import { AiOutlineDownload} from 'react-icons/ai'
import { Fade } from "react-awesome-reveal";
import { ReactComponent as PlanetSub }  from '../images/planet1.svg'


const Section = styled.div`

height : 100vh;
scroll-snap-align: center;
background-color: #4B3080;

display: flex;
align-items: center;
justify-content:center;
position:relative;
z-index:1;
overflow:hidden;
`
function Globe() {

    const normalMapTexture = new TextureLoader().load(myNormalMapTexture);
    const colorMap = new TextureLoader().load(raincolorMap);
    
  
    return (
      <>
      <ambientLight 
      args={["#554391",5]}
      intensity={0.1}/>
     
    <directionalLight 
      args={["#b69df4",1]}
      position={[0,5,0]}
       />
 
                  <directionalLight 
      args={["#8E6FF2",1]}
      position={[3,-3,-5]}
       />
                  <directionalLight 
      args={["#F5A590",1]}
      position={[5,-3,5]}
       />
                  <directionalLight 
      args={["#F5A590",1]}
      position={[-5,0,-3]}
       />

                         <directionalLight 
      args={["#ffe9b1",1]}
      position={[0,-1,0]}
       />
      <mesh position={[0,-2,0]}>
        <Model />
        <meshStandardMaterial attach="material" color={"#623DB3"}/>
        <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        enableRotate={true}
        rotateSpeed={0.4}
        autoRotate={true}
        />
      </mesh>
      </>
    );
  }

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Vivienne_Schoenenberger_CV_2023.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Vivienne_Schoenenberger_CV_2023.pdf';
            alink.click();
        })
    })
}

const Experience =()=>{
  const [isShown, setIsShown] = useState(false);
    return (
        <Section id='experience-section'>
          <Fade >
            <div className="experience">
            
                <div className="brain">
                  <div className="logos">
                    <div className="reactCircle"><img  src={Planet2} alt="fireSpot" className="reactlogo"         
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}></img></div>

                    <div className="springCircle"><img  src={Planet4} alt="fireSpot" className="springlogo"/></div>
                    <div className="javaCircle"><img  src={ReactLogo} alt="fireSpot" className="javalogo"/></div>
                    <div className="htmlCircle"><img  src={Planet3} alt="fireSpot" className="planetlogo"/></div>
                    
                  </div>
                
                <img  src={Brain} alt="Brain" className="brainImg"></img>
                  
                </div>
                
                <div className='experience-txt'>
                
                
                  <div className='exp-txt-content' >
                  
                  <div>
                  <h1 className="title-subpage">My Skills & Experience</h1>
                  <div className='planet-sub-div'>
                  <div ><PlanetSub className='planet-sub'/></div>
                  <p className='p-sub-title-subpage'>JAVA DEVELOPER WITH FRONTEND FOCUS</p></div>
                  <div className='exp-bottom'> <p className='p-subpage'>I have strong skills in Java development and a keen interest in frontend work. 
                  In school, I learned React.js and got hands-on experience with the Spring framework. 
                  I also explored Three.js in my free time and became familiar with Vaadin for my final exam. <br/>
                  <br/>Download my CV to see more details about my skills and experience :</p>
                    
                 
                    
                  </div>
                  </div>


                  <button className='btn2' onClick={onButtonClick} > CV <AiOutlineDownload className='download-icon'/></button></div>
                 
                  
                </div>
               
            </div>
            </Fade>
        </Section>
    )
}
export default Experience