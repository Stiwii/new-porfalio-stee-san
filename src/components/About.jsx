import React from 'react'
import styled from 'styled-components'

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

  .about__container{
    padding:10px;
    box-shadow: 20px 20px 50px rgba(0,0,0,0.5);
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.1);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    position: absolute;
    left:100px;
    right: 280px;
    transition: all 500ms;
  }
`