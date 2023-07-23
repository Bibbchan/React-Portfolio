import React from "react";
import styled from 'styled-components';
import footerPlant1 from '../images/footer-plant-px.png';
import footerPlant2 from '../images/plant2.svg';
import {BsTelephone} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineGitlab} from 'react-icons/ai'

const Section = styled.div`
height : 40vh;
scroll-snap-align: center;
background-color: rgb(11, 8, 28);
position:sticky;
overflow:hidden;
`

const Contact =()=>{
    return (
        <Section id="contact-section">
            <div className="footer-div">
            <div className="footer-title">
                <div className="plant-div-footer">
                <img src= {footerPlant1} alt="plant" className="footer-plant-px" />
                <img src= {footerPlant2} alt="plant" className="footer-plant-px"/>
                </div>
                <p className="contact-p">If you'd like to contact me:</p>
                <div className="contact-p2-div"><p className="contact-p2">Please contact me via email or telephone. I'm looking forward to hearing from you! :)</p></div>
                
            </div >
            <div className="footer-icons">
                <div className="icon-circle"><a href="tel:0765195879" ><BsTelephone className="contact-icon"></BsTelephone></a></div>
                <div className="icon-circle"><a href="mailto:vm.schoenenberger@gmail.com" ><AiOutlineMail className="contact-icon"></AiOutlineMail></a></div>
                <div className="icon-circle"><a href="https://gitlab.com/vivienne_schoenenberger"><AiOutlineGitlab className="contact-icon"></AiOutlineGitlab></a></div>
            </div>
            </div>
            
        </Section>
    )
}
export default Contact