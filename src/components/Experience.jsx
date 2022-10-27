import React from 'react'
import styled from 'styled-components'

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

  .experience__container{
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