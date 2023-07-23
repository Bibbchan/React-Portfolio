import React, { useState, useEffect } from "react";
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
import heart from '../images/heart.png'
import starIcon from '../images/star.svg'
import questionIcon from '../images/question.gif'
import JsSkill from '../images/js_skill.png'
import JavaSkill from '../images/java_skill.png'
import HtmlSkill from '../images/html_skill.png'
import CssSkill from '../images/css_skill.png'
import { act } from "react-dom/test-utils";
import { CSSTransition } from 'react-transition-group';
const Section = styled.div`

height : 100vh;
background-color: #110c2d;
scroll-snap-align: center;
display: flex;
flex-direction: column;
position:relative;
sroll-behavior: smooth;
z-index:1;
overflow:hidden;


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
    left: ${({ x }) => x + 'rem'};
    top: ${({ y }) => y + 'rem'};
    background-repeat: no-repat;
    background-size: contain;
    z-index:2;
   
  
`
const IconImg = styled.div`
    

    position: absolute;
    left: ${({ x }) => x + 'rem'};
    top: ${({ y }) => y + 'rem'};
    

`

function Board({ }) {
  const [centerX, setCenterX] = useState((window.innerWidth / 2 / 16) - 2);
  const [centerY, setCenterY] = useState(((window.innerHeight * 0.8) / 2 / 16) - 12);
  const [x, setX] = useState(centerX);
  const [y, setY] = useState(centerY);
  const [charWidth, setCharWidth] = useState(86);
  const [charHeight, setCharHeight] = useState(320);
  const [gif, setGif] = useState(defaultStandingGif);
  const [skatesImagePositionX, setSkatesImagePositionX] = useState(window.innerWidth - 200);
  const [skatesImagePositionY, setSkatesImagePositionY] = useState(window.innerHeight - 200);
  const [srcImageWand, setSrcImageWand] = useState(questionIcon);
  const [srcImageSkates, setSrcImageSkates] = useState(questionIcon);
  const [srcImageDraw, setSrcImageDraw] = useState(questionIcon);
  const [srcImageController, setSrcImageController] = useState(questionIcon);
 
  const [updatedX, setUpdatedX] = useState(centerX);
  const [updatedY, setUpdatedY] = useState(centerY);

  const [showTxtDiv, setShowTxtDiv] = useState(false);
  const [showTxt, setShowTxt] = useState(false);
  const [showHobbiesDiv, setShowHobbiesDiv] = useState(false);
  const [showSkillsDiv, setShowSkillsDiv] = useState(false);
  const [txt, setTxt] = useState("Click on Hobbies or Skills to open Stats");
  const [showClickTxt, setShowClickTxt] = useState(true);
  const [showWandTxt, setShowWandTxt] = useState("???");
  const [showControllerTxt, setShowControllerTxt] = useState("???");
  const [showDrawTxt, setShowDrawTxt] = useState("???");
  const [showSkateTxt, setShowSkateTxt] = useState("???");
  const [isMobile, setIsMobile] = useState(false);
  const [iconSize, setIconSize] = useState(75);
  const [showSkatesStar,setShowSkatesStar]=useState('block')
  const [showDrawStar,setShowDrawStar]=useState('block')
  const [showControllerStar,setShowControllerStar]=useState('block')
  const [showWandStar,setShowWandStar]=useState('block')
  const [showStatsDiv,setShowStatsDiv]=useState(false)

  const calculateCenter = () => {

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const centerPosX = Math.floor(windowWidth / 2);
    const centerPosY = Math.floor(windowHeight * 0.8 / 2);

    setCenterX(centerPosX);
    setCenterY(centerPosY);

  };

  useEffect(() => {


    console.log("width:" + window.innerWidth)
    if (window.innerWidth <= 768) {
      setIsMobile(true);
      setCharHeight(180);
      setCharWidth(48);
      setIconSize(30);

      setShowHobbiesDiv(true)
      setShowSkillsDiv(true)
      setSrcImageController(controllerIcon)
      setShowControllerTxt("GAMING");
      setSrcImageDraw(drawingIcon)
      setShowDrawTxt("DRAWING");
      setSrcImageWand(wandIcon)
      setShowWandTxt("FANTASY");
      setSrcImageSkates(skatesIcon)
      setShowSkateTxt("ICE SKATING");

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

  function incrementX(x) {
    setGif(walkingRightGif);
    setCharWidth(121);


    return x + 1;
  }
  function decrementX(x) {
    setGif(walkingLeftGif)
    setCharWidth(121);
    return x - 1;
  }

  function incrementY(x) {
    return x + 1;
  }
  function decrementY(x) {
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

  function handleKeyDown(e) {

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


    if (updatedX < 15 + 5 && updatedX > 15 - 5 && updatedY < 25 + 20 && updatedY > 25 - 20) {
      setSrcImageSkates(skatesIcon);
      setShowSkatesStar('none');
      setShowSkateTxt("ICE SKATING");
      console.log(showSkatesStar)

    }

    if (updatedX < 10 + 5 && updatedX > 10 - 5 && updatedY < 5 + 20 && updatedY > 5 - 20) {
      setSrcImageWand(wandIcon);
      setShowWandStar('none');
      setShowWandTxt("FANTASY")
    }

    if (updatedX < 65 + 5 && updatedX > 65 - 5 && updatedY < 10 + 20 && updatedY > 10 - 20) {
      setSrcImageDraw(drawingIcon);
      setShowDrawStar('none');
      setShowDrawTxt("DRAWING");

      
    }
    if (updatedX < 55 + 5 && updatedX > 55 - 5 && updatedY < 25 + 20 && updatedY > 25 - 20) {
      setSrcImageController(controllerIcon);
      setShowControllerStar('none');
      setShowControllerTxt("GAMING");

    }
  }, [updatedX, updatedY]);



  const handleClick = () => {
    setShowStatsDiv(!showStatsDiv)
    setShowClickTxt(!showClickTxt);
    
    if(!isMobile){
      setShowTxt(!showTxt);
      setShowTxtDiv(!showTxtDiv);

    }


  };
  const handleClickHobbies=()=>{
    setShowTxt(false)
    setShowHobbiesDiv(!showHobbiesDiv)
    
  }
  const handleClickSkills=()=>{
    setShowSkillsDiv(!showSkillsDiv)
  }

  function handleKeyUp(e) {
    e.view.event.preventDefault();
    if (e.key === 'ArrowLeft') {
      setCharWidth(90);
      setGif(standingLeftGif)
    }
    if (e.key === 'ArrowRight') {
      setCharWidth(90);
      setGif(standingRightGif)
    }
    if (e.key === 'ArrowDown') {
      setCharWidth(86);
      setGif(defaultStandingGif)
    }
  }
  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );
  const handleTap = async event => {
    const touch = event.touches[0];
    const xTap = touch.clientX / 16;
    console.log("TAP: " + xTap / 16)
    console.log("x cor: " + x)

    const yTap = (touch.clientY / 16) - window.innerHeight * 0.2 / 16 - charHeight / 32;
    const xDif = xTap - x;
    const yDif = yTap - y;
    if (xDif > 0) {
      for (let i = 1; i <= xDif; i++) {
        setX(x + i);
        setCharWidth(68);
        setCharHeight(180);
        setGif(walkingRightGif)
        await delay(100);
      }
      setCharWidth(48)
      setCharHeight(180);
      setGif(standingRightGif)

    }
    else {

      for (let i = 1; i <= xDif * -1; i++) {
        setX(x - i);
        setCharWidth(68);
        setCharHeight(180);
        setGif(walkingLeftGif)
        await delay(100);
      }
      setCharWidth(48)
      setCharHeight(180);
      setGif(standingLeftGif)

    };

    if (yDif > 0) {
      for (let f = 1; f <= yDif; f++) {
        setY(y + f);
        setCharWidth(48);
        setCharHeight(180);
        setGif(defaultStandingGif)
        await delay(100);
      }

      setGif(defaultStandingGif)

    } else {
      for (let f = 1; f <= yDif * -1; f++) {
        setY(y - f);
        setCharWidth(48);
        setCharHeight(180);
        setGif(defaultStandingGif)
        await delay(100);
      }

      setGif(defaultStandingGif)
    }

  }

  // Use the x and y values as needed


  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
  }, [])

  return (
    <WalkingGround onKeyDown={handleKeyDown}>
      <div className="click-me-div">
        {showClickTxt && <p className="click-me-txt">CLICK ME ↓</p>
        }
      </div>
      <Character className="me" onClick={handleClick} x={x} y={y} style={{ backgroundImage: `url(${gif})`, width: charWidth + 'px', height: charHeight + "px" }} ></Character>
        <div className="hobbies-div">
        <div className="stats-div">
      {showStatsDiv && <div className="hobbiesStats-div">
        <p onClick = {handleClickHobbies} className="hobbies-p-stats">HOBBIES</p>
          {showHobbiesDiv && <div className="hobbiesStats-div-border">
          
            <div className="hobbie-section-div">
              <p className="hobbies-p">{showSkateTxt}</p>
              <div className="hobby-section"><img className="icon-hobbies" src={srcImageSkates}></img>
              <img className="heart" src={heart}></img>
              <img className="heart" src={heart}></img>
              </div>

            </div>
            <div className="hobbie-section-div">
              <p className="hobbies-p">{showDrawTxt}</p>
              <div className="hobby-section"><img  className="icon-hobbies" src={srcImageDraw}>
                
              </img>
              <img className="heart" src={heart}></img>
              <img className="heart" src={heart}></img>
              </div>
            </div>

            <div className="hobbie-section-div">
              <p className="hobbies-p">{showControllerTxt}</p>
              <div className="hobby-section">
                <img className="icon-hobbies" src={srcImageController}></img>
                <img className="heart" src={heart}></img>
                <img className="heart" src={heart}></img>
                <img className="heart" src={heart}></img>
                <img className="heart" src={heart}></img>
              </div>
            </div>
            <div className="hobbie-section-div">
              <p className="hobbies-p">{showWandTxt}</p>
            <div className="hobby-section">
              <img className="icon-hobbies" src={srcImageWand}></img>
              <img className="heart" src={heart}></img>
              <img className="heart" src={heart}></img>
              <img className="heart" src={heart}></img>
            </div>
            </div>
          </div>}
        </div>}
        {showStatsDiv && <div className="skills-div">
          <p onClick = {handleClickSkills} className="skills-p-stats">SKILLS</p>

          {showSkillsDiv && <div className="hobbiesStats-div-border">
            <div className="hobbie-section-div">
              <p className="skills-p">JavaScript</p>
              <img className="skill-meter-img" src={JsSkill}></img>
            </div>
            <div className="hobbie-section-div">
              <p className="skills-p">Java</p>
              <img className="skill-meter-img" src={JavaSkill}></img>
            </div>
            <div className="hobbie-section-div">
              <p className="skills-p">HTML</p>
              <img className="skill-meter-img" src={HtmlSkill}></img>
            </div>
            <div className="hobbie-section-div">
              <p className="skills-p">CSS</p>
              <img className="skill-meter-img" src={CssSkill}></img>
            </div>

          </div>}
        </div>}
      </div>
      <div className="stars">
      <IconImg x='15' y='25' className="star" style={{ display:`${showSkatesStar}`,backgroundImage: `url(${starIcon})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: iconSize + "px", height: iconSize + "px" }}></IconImg>
      <IconImg x='10' y='5' className="star2"style={{display:`${showWandStar}`, backgroundImage: `url(${starIcon})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: iconSize + "px", height: iconSize + "px" }}></IconImg>
      <IconImg x='65' y='10' className="star3"style={{display:`${showDrawStar}` ,backgroundImage: `url(${starIcon})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: iconSize + "px", height: iconSize + "px" }}></IconImg>
      <IconImg x='55' y='25' className="star4" style={{display:`${showControllerStar}`, backgroundImage: `url(${starIcon})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: iconSize + "px", height: iconSize + "px" }}></IconImg>
      </div>
        </div>
      
      <CSSTransition in={showTxtDiv} timeout={300} classNames="pop-up" unmountOnExit>
        <div className="hobbies-txt">
          <div className="hobbies-p">
            {showTxt && <span className="typewriter" style={{ "--n": 40 }}>{txt}</span>}
            {showHobbiesDiv && <span className="typewriter" style={{ "--n": 40 }}>Use Arrowkeys to move ☆</span>}
           

          </div>
        </div></CSSTransition>
    </WalkingGround>
  )
}


const Me = () => {
  return (
    <Section id="about-me-section">
      <div className="about-div">
        <h1 className="about-title">ABOUT ME</h1>

      </div>

      <div className="board-div">
        <Board className='walkingboard'></Board>

      </div>

    </Section>
  )
}
export default Me