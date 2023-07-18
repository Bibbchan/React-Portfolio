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
import VaadinLogo from '../images/vaadin.png';
import Planet1 from'../images/planet1.svg'
import Planet2 from'../images/planet2.svg'
import ThreeLogo from '../images/three.png';
import { AiOutlineDownload} from 'react-icons/ai'
import { Fade } from "react-awesome-reveal";


const Section = styled.div`

height : 100vh;
scroll-snap-align: center;
background-color: #b69df4;

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
            <div className="experience">

                <div className="brain">
                  <div className="logos">
                    <div className="reactCircle"><img  src={ReactLogo} alt="fireSpot" className="reactlogo"         
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}></img></div>
                    <div className="springCircle"><img  src={SpringLogo} alt="fireSpot" className="springlogo"/></div>
                    <div className="threeCircle"><img  src={ThreeLogo} alt="fireSpot" className="threelogo"/></div>
                    <div className="vaadinCircle"><img  src={VaadinLogo} alt="fireSpot" className="vaadinlogo"/></div>
                    <div className="javaCircle"><img  src={Planet2} alt="fireSpot" className="javalogo"/></div>
                    <div className="htmlCircle"><img  src={Planet1} alt="fireSpot" className="planetlogo"/></div>
                    <div className="cssCircle"><img  src={VaadinLogo} alt="fireSpot" className="csslogo"/></div>
                  </div>
                
                <Canvas className="canvas">
                    <Globe/>
                    </Canvas>
                  
                </div>
                
                <div className='experience-txt'>
                
                
                  <div className='exp-txt-content' >
                  <Fade >
                  <div>
                  <h1 className="title-subpage">My Skills & Experience</h1>
                  <p className='p-sub-title-subpage'>Java Developer with Frontend Focus</p></div>
                  <div className='exp-bottom'> <p className='p-subpage'>I have strong skills in Java development and a keen interest in frontend work. 
                  In school, I learned React.js and got hands-on experience with the Spring framework. 
                  I also explored Three.js in my free time and became familiar with Vaadin for my final exam. <br/>
                  <br/>Additionally, I enjoy being creative, and I love using Adobe Photoshop for drawing and Adobe Illustrator for illustrations. 
                  I bring a blend of coding expertise and artistic creativity to any project, making me well-suited for the intersection of Java and frontend development.<br/>
                  <br/>Download my CV to see more details about my skills and experience :</p>
                    <button className='btn2' onClick={onButtonClick} > CV <AiOutlineDownload className='download-icon'/></button></div>
                 
                    </Fade>
                  </div>
                 
                  
                </div>
              
            </div>
        </Section>
    )
}
export default Experience