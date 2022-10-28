import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BsChevronDown } from 'react-icons/bs';


const Home = () => {
  return (
    <>
      <HomeSection id='home'>
        
         
        <div className="home__container">
          <div>
             <h1 className='greeting'><span className='greeting__span'><span>Welcome</span> , my name is </span> </h1>
        </div>
         
          <div>
          <h2 className='name'><span className='name_span'>Steeven Sanchez.</span> </h2>
        </div>
        <div>
          <h3 className='employment'><span className='employment__span'>Full Stack Web Developer.</span></h3>
        </div>
       
        <div>
          <p><span className='uppercase'>I</span> am a student in the last semester of Computer Science and Full Stack Web Developer, especially in Front End. Currently, I work on creating projects where I focus my knowledge on <span className='react'><a href="https://reactjs.org" target='_blank'>Reactjs</a>. </span> </p>
        </div>
        </div>



        <button className='abajo__btn'>
        <Link to='/about'><BsChevronDown /></Link>
      </button>
     
      

      </HomeSection>
     
    </>
  )
}

export default Home

const HomeSection = styled.section`
  /* background-color: var(--navy); */
  
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

  height:100%;
     max-height: 600px;
     display: flex;
     justify-content: center;
     align-items: center;

  .abajo__btn{
    display:flex;
    align-items: center;
    justify-content:center;
    position: absolute;
    bottom: 50px;
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
    color: var(--green);
  }
  .home__container{
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
  .home__container:hover{
    transform:translateY(-5px) scale(1.01);
    transition: all 500ms;
  }
  div{
      display: block;
      
     }
 
  .greeting span{
      animation: open 1000ms ease;
     } 
   h1:hover, h2:hover{
    text-shadow: 0 0 3px var(--green);
    transition: text-shadow 100ms ease;
  }
  h1{
        margin: 0px 0px 30px 4px;
        font-family: var(--font-mono);
        font-size: clamp(18px, 5vw, 22px);
        font-weight: 400;
        color: var(--green)
     }
  h1 span {
    font-size: clamp(30px, 5vw, 40px);
    -webkit-text-stroke: 1px var(--green);
  color: white; 
  }
  div h2 span{
    animation: open 1000ms ease;
     }
  
  h2{
      font-size: clamp(40px, 8vw, 80px);
      font-weight: 600;
     color: var(--slate);
     line-height: 1.1;
     }
  div h3 span{
    animation: open 1000ms ease;
     }
  h3{
    margin:0;
    margin-top: 10px;
    line-height: 0.9;
    color: var(--slate);
    font-size: clamp(35px, 8vw, 65px);
    
  }
  div p{
    animation: open 1000ms ease;
  }

  p{
    margin: 20px 0px 0px;
    max-width: 540px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  p span {
    /* color: var(--green); */
    font-family: var(--font-mono);
    animation: open 1000ms ease;
  }
  p span:hover{
    text-shadow:  0 0 8px white;
  }

  a{
    text-decoration: underline; 
    color: var(--green);
    font-family: var(--font-mono);
    transition: var(--transition);
  }
  .uppercase{
    font-size: clamp(40px, 0vw, 60px);
  }
  @media (max-width: 1080px){
 padding: 0px 100px;
 .home__container{

    left:40px;
    right: 200px;
    
    transition: all 500ms;
  }
  }
  @media (max-width: 768px){
    padding: 0px 50px;
    .home__container{

    left:20px;
    right: 20px;
    transition: all 500ms;
  }
  }   
`