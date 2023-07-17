import {React, Suspense, useEffect, useRef} from 'react';
import './App.css';
import { Canvas } from "react-three-fiber";
import { SphereGeometry, MeshStandardMaterial,TextureLoader } from "three";
import myNormalMapTexture  from './textures/Rain_normal-min.png'
import raincolorMap  from './textures/Rain_color_random.png'
import { OrbitControls,Circle,Stats } from '@react-three/drei';
import Model from './Scene';
import TagCloud from 'TagCloud';
import "./styles/TextSphere.css"
import MainPage from './components/main';
import Experience from './components/experience';
import Me from './components/me';
import Contact from './components/contact';
import styled from 'styled-components';




const Container = styled.div`


height : 100vh;
scroll-snap-type: y mandatory;
sroll-behavior: smooth;
overflow-y: auto;
scrollbar-width: none;
&::-webkit-scrollbar{
  display:none
}
/* put on top */

position:relative;

`


function App() {

  return (
    <>
    <Container>
      <MainPage/>
      <Experience/>
      <Me/>
      <Contact/> 
    </Container>
   
    </>
  );
}

export default App;
