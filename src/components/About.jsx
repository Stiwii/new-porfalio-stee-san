import React from 'react'
import styled from 'styled-components'
import { BsChevronDown,BsChevronUp } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
    <AboutSection id='about'>
      <div className="about__container">

      <div className='title'>
        <h1><span>About me</span></h1>
      </div>
      <div className='info'>
        <p>
          Hello! my name is Steeven Sanchez, I enjoy to create different web pages that could be very intereting for the user.
          In general, I like programing world and I'm in the last semester of Computer Sciences in <span><a href="https://www.yachaytech.edu.ec">Yachay Yech University</a></span>, but the field that interests me most is web programming.
        </p>
         <p>
          Fast-fordward to today, due <span><a href="https://www.academlo.com">Academy</a> </span> I improved my skills and and I'm ready to face any front-end challenge in <span><a href="https://reactjs.org">ReactJS</a></span>.
         </p>
         <p>
         Here are a few technologies I’ve been working with recently:
         </p>
         <ul>
          <li><span>▶ </span>React js</li>
          <li><span>▶ </span>JavaScript</li>
          <li><span>▶ </span>Node.js</li>
         </ul>

      </div>
      </div>
      
      <div className='up-down'>

      <button className='arriba__btn'>
        <Link to='/'><BsChevronUp /></Link>
      </button>
      <button className='abajo__btn'>
        <Link to='/skills'><BsChevronDown /></Link>
      </button>
      </div>
     
    </AboutSection>
    </>
  )
}

export default About

const AboutSection = styled.section`
  border-radius: 10px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100%;
  padding: 0px 100px;
  max-width: inherit;
  margin:auto;

  .up-down{
    position: absolute;
    display:flex;
    align-items: center;
    justify-content:center;
    gap:20px;
    bottom: 50px;
    width:100%;
    height:100%;
    max-width:50px;
    max-height:50px;
    transform: translateX(-50%);
  }
  .abajo__btn,.arriba__btn{
    position: relative;
    color: var(--green);
    background: rgba(255, 255, 255, 0.1);
    aspect-ratio: 1;
    border-radius: 50%;
    width:100%;
    height:100%;
    max-width:50px;
    max-height:50px;
    font-size:30px;
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: 20px 20px 50px rgba(0,0,0,0.5);
  }
  .about__container{
    padding:10px;
    box-shadow: 20px 20px 50px rgba(0,0,0,0.5);
    /* border-radius: 15px; */
    background: rgba(255, 255, 255, 0.1);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    position: absolute;
    left:100px;
    right: 280px;
    transition: all 500ms;
  }
  .about__container:hover{
    transform:translateY(-5px) scale(1.01);
    transition: all 500ms;
  }
  .title{

  }
  div h1{
      
        margin: 0px 0px 30px 4px;

        font-weight: 400;
        color: var(--green);
        text-align:center;
     }
   h1 span {
    font-size: clamp(30px, 5vw, 40px);
    -webkit-text-stroke: 1px var(--green);
  color: white; 
  animation: open 1000ms ease;
  }
   h1:hover, h2:hover{
    text-shadow: 0 0 3px var(--green);
    transition: text-shadow 100ms ease;
  }
  .info{
    animation: open 1000ms ease;
  }
  p{
    margin-bottom: 10px;
    margin-left: 5px;
    font-size: clamp(18px, 2vw, 22px); 
    animation: open 1000ms ease;
  }
  p span{
    color: var(--green);
    font-family: var(--font-mono);
  }
  p span:hover{
    text-shadow:  0 0 8px white;
  }
  li span{
    color: var(--green);
    font-size: 10px;
    margin-left: 10px;
  }

  @media (max-width: 1080px){
 padding: 0px 100px;
 .about__container{
   
    left:40px;
    right: 200px;
    
    transition: all 500ms;
  }
  }
  @media (max-width: 768px){
    padding: 0px 50px;
    .about__container{
    
    left:20px;
    right: 20px;
    transition: all 500ms;
  }
  }  
`