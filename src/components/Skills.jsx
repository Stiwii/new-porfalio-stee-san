import React from 'react'
import styled from 'styled-components'

const Skills = () => {
  return (
    <SkillSection>

      <div className='skills__container'>
        <h1>Skills</h1>
        <div className='languages'>
          <h2><span>PROGRAMMING LANGUAGES</span></h2>
          <ul>
            <li><span>▶ </span> Python</li>
            <li><span>▶ </span> C/C++ C#</li>
            <li><span>▶ </span> JavaScript</li>
          </ul>
        </div>
        <div className="technologies">
          <h2>TECHNOLOGIES</h2>
          <ul>
          <li><span>▶ </span> HTML5</li>
          <li><span>▶ </span> Css</li>
          <li><span>▶ </span> Node.js</li>
          <li><span>▶ </span> SQL</li>
          <li><span>▶ </span> MongoDB(NoSQL)</li>
          </ul>
        </div>
      </div>
    </SkillSection>
  )
}

export default Skills

const SkillSection = styled.section`
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

  .skills__container{
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
    display:grid;
    grid-template-columns: repeat(2,1fr);
  }
  h1{
    grid-column: span 2;
    align-items: center;
    justify-content:center;
    text-align: center;
    font-size: var(--fz-35-65);
  }
  h2{
    font-size: var(--fz-20-40);
  }

  `