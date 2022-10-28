import React from 'react'
import styled from 'styled-components'
import { BsChevronDown,BsChevronUp } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Skills = () => {
  return (
    <SkillSection>

      <div className='skills__container'>
        <h1><span>Skills</span> </h1>
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
          <li><span>▶ </span> PostgreSQL</li>
          <li><span>▶ </span> MongoDB(NoSQL)</li>
          </ul>
        </div>

        <div className='container_icons'>
      <div className="icon1">
        <img src='public/skills/css.png' alt="" />
      </div>
      <div className="icon2">
        <img src='./public/skills/python.png' alt="" />
      </div>
      <div className="icon3">
        <img src='./public/skills/javascript.png' alt="" />
      </div>
      <div className="icon4">
        <img src='./public/skills/react.png' alt="" />
      </div>
      <div className="icon5">
        <img src='./public/skills/nodejs.png' alt="" />
      </div>
      </div>
      </div>

      

      <div className='up-down'>
       <button className='arriba__btn'>
        <Link to='/about'><BsChevronUp /></Link>
      </button>
      <button className='abajo__btn'>
        <Link to='/experience'><BsChevronDown /></Link>
      </button>
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


 
  img{
    width: 50px;
    height: 50px;
    background-color: transparent;
    border-radius:5px;
  }

  .icon1{
   position:absolute;
   top:10px;
   left:10px;
   z-index:-1;
  }
  .icon2{
   position:absolute;
   top:10px;
   right:10px;
   z-index:-1;
  }
  .icon3{
   position:absolute;
   bottom:10px;
   left:10px;
   z-index:-1;
  }
  .icon4{
   position:absolute;
   bottom:10px;
   right:10px;
   z-index:-1;
  }
  .icon5{
   position:absolute;
   right:50%;
   top:50%;
   z-index:-1;
  }
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

  .skills__container{
    position: relative;
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
    display:grid;
    grid-template-columns: repeat(2,1fr);
  }
  .skills__container:hover{
    transform:translateY(-5px) scale(1.01);
    transition: all 500ms;
  }
  h1{
    grid-column: span 2;
    align-items: center;
    justify-content:center;
    text-align: center;
    font-size: var(--fz-35-65);
  }
  h1{ 

      font-weight: 400;
    
   }
h1 span {
  font-size: clamp(30px, 5vw, 40px);
  -webkit-text-stroke: 1px var(--green);
color: white; 

animation: open 1000ms ease;
}
  h2{
    font-size: clamp(8px, 5vw, 30px);
    animation: open 1000ms ease;
    text-shadow:  0 0 4px white;
    margin-bottom: 10px;
  }
  li{
    animation: open 1000ms ease;
  }

  li span{
    color: var(--green);
    font-size: 10px;
  }
  li{
    font-size: clamp(8px, 5vw, 26px);
  }

  @media (max-width: 1080px){
 padding: 0px 100px;
 .skills__container{

    left:40px;
    right: 200px;
    
    transition: all 500ms;
  }
  }
  @media (max-width: 768px){
    padding: 0px 50px;
    .skills__container{
    
    left:20px;
    right: 20px;
    transition: all 500ms;
  }
  }  
  `