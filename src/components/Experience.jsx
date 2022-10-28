import React from 'react'
import styled from 'styled-components'
import { BsChevronDown,BsChevronUp } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Experience = () => {
  return (
    <ExperienceSection>
      <div className='experience__container'>
        <h1>Experience</h1>
        <div className='Epi'>
          <h2><span> Epicentro </span></h2>
          <p>Computer Science Engineer Intern</p>
          <ul>
            <li>Web page modeling and restructuring using CSS and HTML ;</li>
            <li>Database hand using Microsoft Excel;</li>
          </ul>
        </div>
        <div className='bear'>
          <h2><span> Viewpoint Andean Bear </span></h2>
          <p>Pimampiro community outreach project</p>
          <ul>
            <li>Update of computer software in schools in the Pimampiro community</li>
            <li>Management and monitoring of Social Networks of the Andean Bear</li>
          </ul>
        </div>
      </div>
        <div className='up-down'>
       <button className='arriba__btn'>
        <Link to='/skills'><BsChevronUp /></Link>
      </button>
      <button className='abajo__btn'>
        <Link to='/projects'><BsChevronDown /></Link>
      </button>
      </div>
    </ExperienceSection>
  )
}

export default Experience

const ExperienceSection = styled.section`
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

  .experience__container{
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
  .experience__container:hover{
    transform:translateY(-5px) scale(1.01);
    transition: all 500ms;
  }

  @media (max-width: 1080px){
 padding: 0px 100px;
 .experience__container{
   
    left:40px;
    right: 200px;
    
    transition: all 500ms;
  }
  }
  @media (max-width: 768px){
    padding: 0px 50px;
    .experience__container{
  
    left:20px;
    right: 20px;
    transition: all 500ms;
  }
  } 

`