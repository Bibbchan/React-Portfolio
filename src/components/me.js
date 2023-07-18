import React,{useState, useEffect} from "react";
import styled from 'styled-components';
import defaultGif from '../images/default_char_portfolio.gif';
import defaultStandingGif from '../images/default_char_notxt.gif';
import standingLeftGif from '../images/left_standing_char_with_txt.gif';
import standingRightGif from '../images/right_standing_char.gif';
import walkingRightGif from '../images/walking_right.gif'
import walkingLeftGif from '../images/walking_left.gif'
import drawingIcon from '../images/palette2.png';
import controllerIcon from '../images/controller2.png'
import wandIcon from '../images/wand.png'
import skatesIcon from '../images/skates.png'
import questionIcon from '../images/question.gif'
import { act } from "react-dom/test-utils";
import { CSSTransition } from 'react-transition-group';
const Section = styled.div`

height : 100vh;
background-color: #232163;
scroll-snap-align: center;
display: flex;
flex-direction: column;
position:relative;
sroll-behavior: smooth;
z-index:1;


`
const WalkingGround = styled.section`

width: 100vw;
height: 80vh;
position:relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
`
const Character = styled.div`
    
    

    position: absolute;
    left: ${({ x }) => x +'rem'};
    top: ${({ y }) => y +'rem'};
    background-repeat: no-repat;
    background-size: contain;
  
`
const IconImg = styled.div`
    

    position: absolute;
    left: ${({ x }) => x +'rem'};
    top: ${({ y }) => y +'rem'};
    

`

  function Board({}) {
    const [centerX, setCenterX] = useState((window.innerWidth/2/16)-3);
    const [centerY, setCenterY] = useState(((window.innerHeight*0.8)/2/16)-12);
    const [x, setX] = useState(centerX);
    const [y, setY] = useState(centerY);
    const [charWidth,setCharWidth] = useState(86);
    const[charHeight,setCharHeight]= useState(320);
    const [gif, setGif]= useState(defaultStandingGif);
    const[skatesImagePositionX, setSkatesImagePositionX]= useState( window.innerWidth - 200);
    const[skatesImagePositionY, setSkatesImagePositionY]= useState( window.innerHeight - 200);
    const[srcImageWand, setSrcImageWand] = useState(questionIcon);
    const[srcImageSkates, setSrcImageSkates] = useState(questionIcon);
    const[srcImageDraw, setSrcImageDraw] = useState(questionIcon);
    const[srcImageController, setSrcImageController] = useState(questionIcon);
    const[drawImagePositionX, setDrawImagePositionX]= useState( window.innerWidth - 200);
    const[drawImagePositionY, setDrawImagePositionY]= useState( window.innerHeight - 200);
    
    const[controllerImagePositionX, setControllerImagePositionX]= useState( window.innerWidth - 200);
    const[controllerImagePositionY, setControllerImagePositionY]= useState( window.innerHeight - 200);
    
    const[wandImagePositionX, setWandImagePositionX]= useState( window.innerWidth - 200);
    const[wandImagePositionY, setWandImagePositionY]= useState( window.innerHeight - 200);
    const [updatedX, setUpdatedX] = useState(centerX);
    const [updatedY, setUpdatedY] = useState(centerY);
    const [showImage, setShowImage] = useState(false);
    const [showTxtDiv, setShowTxtDiv] = useState(false);
    const [showTxt, setShowTxt] = useState(false);
    const [txt, setTxt] = useState("Use arrow keys to move");
    const [showClickTxt, setShowClickTxt] = useState(true);
    const [showWandTxt, setShowWandTxt] = useState(false);
    const [showControllerTxt, setShowControllerTxt] = useState(false);
    const [showDrawTxt, setShowDrawTxt] = useState(false);
    const [showSkateTxt, setShowSkateTxt] = useState(false);
    const [ isMobile, setIsMobile] = useState(false);
    const [iconSize, setIconSize] = useState(75);

    const calculateCenter = () => {

      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
  
      const centerPosX = Math.floor(windowWidth / 2);
      const centerPosY = Math.floor(windowHeight*0.8 / 2);
  
      setCenterX(centerPosX);
      setCenterY(centerPosY);
    
    };

    useEffect(() => {
        
      
      console.log("width:"+window.innerWidth )
      if(window.innerWidth <= 768){
        setIsMobile(true);
        setCharHeight(180);
          setCharWidth(48);
          setIconSize(30);
          setTxt("Tap to move")
      }
      
        
        const handleResize = () => {
          calculateCenter();
          

          
        };


        handleResize();

        window.addEventListener('resize', handleResize);
    
        // Cleanup the event listener
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

      function incrementX(x){
        setGif(walkingRightGif);
          setCharWidth(121);

          
        return x + 1;
      }
      function decrementX(x){
        setGif(walkingLeftGif)
        setCharWidth(121);
        return x - 1;  
      }

      function incrementY(x){
        return x + 1;
      }
      function decrementY(x){
        return x - 1;  
      }


      const actionXMap = {
        ArrowLeft: decrementX,
        ArrowRight: incrementX
     }
     const actionYMap = {
        ArrowDown: incrementY,
        ArrowUp: decrementY
     }
    
     useEffect(() => {
      setUpdatedX(x);
    }, [x]);
  
    useEffect(() => {
      setUpdatedY(y);
    }, [y]);

    function handleKeyDown(e){
      
      e.view.event.preventDefault();
      const actionX = actionXMap[e.key];
      const actionY = actionYMap[e.key];
      
      actionX && setX(actionX);
      actionY && setY(actionY);

      if (actionX) {
        setX(x => {
          const updatedX = actionX(x);
           return updatedX
      
        });
      }

      if (actionY) {
        setY(y => {
          const updatedY = actionY(y);
           return updatedY
      
        });
      }
      
     
    }
    useEffect(() => {
      // Compare updatedX and updatedY


      if(updatedX<skatesImagePositionX+2 && updatedX>skatesImagePositionX-2 && updatedY<skatesImagePositionY+6 && updatedY>skatesImagePositionY-6 ){
        setSrcImageSkates(skatesIcon);
        setShowSkateTxt(true);
        setShowTxt(false);
        setShowControllerTxt(false);
        setShowWandTxt(false);
        setShowDrawTxt(false);


      }

      if(updatedX<wandImagePositionX+2 && updatedX>wandImagePositionX-2 && updatedY<wandImagePositionY+6 && updatedY>wandImagePositionY-6 ){
        setSrcImageWand(wandIcon);
        setShowWandTxt(true);
        setShowSkateTxt(false);
        setShowTxt(false);
        setShowControllerTxt(false);
        setShowDrawTxt(false);

      }

      if(updatedX<drawImagePositionX+2 && updatedX>drawImagePositionX-2 && updatedY<drawImagePositionY+6 && updatedY>drawImagePositionY-6 ){
        setSrcImageDraw(drawingIcon);
        setShowDrawTxt(true);
        setShowWandTxt(false);
        setShowSkateTxt(false);
        setShowTxt(false);
        setShowControllerTxt(false);
      }
      if(updatedX<controllerImagePositionX+6 && updatedX>controllerImagePositionX-6 && updatedY<controllerImagePositionY+15 && updatedY>controllerImagePositionY-15 ){
        setSrcImageController(controllerIcon);
        setShowControllerTxt(true);
        setShowDrawTxt(false);
        setShowWandTxt(false);
        setShowSkateTxt(false);
        setShowTxt(false);
      }
    }, [updatedX, updatedY]);



      const handleClick = () => {
        setShowImage(!showImage);
        setShowTxt(!showTxt);
        setShowClickTxt(!showClickTxt);
        setShowTxtDiv(!showTxtDiv);
       
        
        if(window.innerWidth <= 768){
          setSkatesImagePositionX(5);
          setSkatesImagePositionY(2);
          
          setWandImagePositionX(18);
          setWandImagePositionY(31);
  
          setDrawImagePositionX(20)
          setDrawImagePositionY(10)
  
          setControllerImagePositionX(10)
          setControllerImagePositionY(25)
        }
        else{
          
        const maxWidth = (window.innerWidth)/16-10;
        const randomRightX = Math.floor(Math.random() * ( maxWidth - ((window.innerWidth/16)*2/3) + 1) + ((window.innerWidth/16)*2/3));
        const randomRightX2 = Math.floor(Math.random() * ( maxWidth - ((window.innerWidth/16)*2/3) + 1) + ((window.innerWidth/16)*2/3));
        const randomLeftX2 = Math.floor(Math.random() * ((window.innerWidth/16/3-10) - 1 + 1) + 1);
        const randomLeftX=  Math.floor(Math.random() * ((window.innerWidth/16/3-10) - 1 + 1) + 1);
          setSkatesImagePositionX(randomLeftX2);
          setSkatesImagePositionY(2);
          
          setWandImagePositionX(randomRightX);
          setWandImagePositionY(6);
  
          setDrawImagePositionX(randomLeftX)
          setDrawImagePositionY(10)
  
          setControllerImagePositionX(randomRightX2)
          setControllerImagePositionY(16)
        }
        




      };
    
    function handleKeyUp(e){
        e.view.event.preventDefault();
        if(e.key === 'ArrowLeft'){
          setCharWidth(90);
          setGif(standingLeftGif)
        }
        if(e.key ==='ArrowRight'){
          setCharWidth(90);
          setGif(standingRightGif)
        }
        if(e.key ==='ArrowDown'){
          setCharWidth(86);
          setGif(defaultStandingGif)
        }
      }
      const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );
      const handleTap = async event => {
        const touch = event.touches[0];
        const xTap = touch.clientX/16;
        console.log("TAP: "+ xTap/16)
        console.log("x cor: "+x)

        const yTap = (touch.clientY/16)- window.innerHeight*0.2/16 -charHeight/32;
        const xDif = xTap-x;
        const yDif = yTap-y;
        if(xDif>0){
          for(let i = 1; i<=xDif; i++){
            setX(x+i);
            setCharWidth(68);
            setCharHeight(180);
            setGif(walkingRightGif)
            await delay(100);
          }
          setCharWidth(48)
          setCharHeight(180);
          setGif(standingRightGif)
         
        }
        else{
          
          for(let i = 1; i<=xDif*-1; i++){
            setX(x-i);
            setCharWidth(68);
            setCharHeight(180);
            setGif(walkingLeftGif)
            await delay(100);
          }
          setCharWidth(48)
          setCharHeight(180);
          setGif(standingLeftGif)
  
        };
        
        if(yDif>0){
          for(let f = 1; f<=yDif; f++){
            setY(y+f);
            setCharWidth(48);
            setCharHeight(180);
            setGif(defaultStandingGif)
            await delay(100);
          }
          
          setGif(defaultStandingGif)
         
        } else{
          for(let f = 1; f<=yDif*-1; f++){
            setY(y-f);
            setCharWidth(48);
            setCharHeight(180);
            setGif(defaultStandingGif)
            await delay(100);
          }

          setGif(defaultStandingGif)
        }
        
        } 
        
        // Use the x and y values as needed
      
    
    useEffect(()=>{
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("keyup",handleKeyUp);
      if(isMobile){
        document.addEventListener('touchstart',handleTap);
      }
  
      
    },[])

    return (
        <WalkingGround  onKeyDown={handleKeyDown} onTouchStart={handleTap}>
          <div className="click-me-div">
          {showClickTxt &&  <p className="click-me-txt">CLICK ME ↓</p>
           }
            </div>
          <Character className="me" onClick={handleClick} x={x} y={y} style={{ backgroundImage: `url(${gif})`, width: charWidth+'px', height: charHeight+"px"}} ></Character>
          <CSSTransition in={showImage} timeout={300} classNames="icon-transition" unmountOnExit>
          <div className="hobbies-div">
            <IconImg x={skatesImagePositionX} y={skatesImagePositionY} style={{ backgroundImage: `url(${srcImageSkates})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', width:iconSize+"px", height:iconSize+"px"}}></IconImg>
            <IconImg x={wandImagePositionX} y={wandImagePositionY} style={{ backgroundImage: `url(${srcImageWand})`, backgroundRepeat:'no-repeat' ,backgroundSize:'cover',width:iconSize+"px", height:iconSize+"px"}}></IconImg>
            <IconImg x={drawImagePositionX} y={drawImagePositionY} style={{ backgroundImage: `url(${srcImageDraw})`, backgroundRepeat:'no-repeat' ,backgroundSize:'cover',width:iconSize+"px", height:iconSize+"px"}}></IconImg>
            <IconImg x={controllerImagePositionX} y={controllerImagePositionY} style={{ backgroundImage: `url(${srcImageController})`, backgroundRepeat:'no-repeat' ,backgroundSize:'cover',width:iconSize+"px", height:iconSize+"px"}}></IconImg>
          </div>
          </CSSTransition>
           <CSSTransition in={showTxtDiv} timeout={300} classNames="pop-up" unmountOnExit>
            <div className="hobbies-txt">
              <div className="hobbies-p">
                {showTxt && <span className="typewriter" style={{"--n":22}}>{txt}</span>}
                {showControllerTxt && <span className="typewriter" style={{"--n":102}}>Whether I'm exploring virtual worlds or competing with friends, gaming brings me joy and entertainment.</span>}
                {showDrawTxt && <span className="typewriter" style={{"--n":98}}>I love being creative. Illustrating or drawing gives me a break from annoying code that won't run </span>}
                {showWandTxt && <span className="typewriter" style={{"--n":91}}>Whether it's through books, movies, or games, I love immersing myself in fantastical realms</span>}
                {showSkateTxt && <span className="typewriter" style={{"--n":94}}>I have been figure skating for 8 years, and it's still something I love doing in my free time.</span>}
              
              </div>
        </div></CSSTransition>
        </WalkingGround>
      )
    }


const Me =()=>{
    return (
        <Section id="about-me-section">
            <div className="about-div">
            <h1 className="about-title">ABOUT ME</h1>
            
            </div>
            
            <div className="board-div">
            <Board className ='walkingboard'></Board>
            
            </div>

        </Section>
    )
}
export default Me