import React from 'react'
import styled from 'styled-components'


const Home = () => {
  return (
    <>
      <HomeSection id='home'>
        
          <div>
          <h1 className='greeting'><span className='greeting__span'>Welcome, my name is </span> </h1>
        </div>
         <div className="home__container">
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
        

      </HomeSection>
    </>
  )
}

export default Home

const HomeSection = styled.section`
  background-color: var(--navy);
  /* background-color: black; */
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100%;
  padding: 0px 150px;
  max-width: inherit;
  margin:auto;
  .home__container{
    
    /* border-left: 1px solid var(--lightest-slate); */
    /* padding-left : 10px; */
  }
  div{
      display: block;
      transition: 
     }
 
  div h1{
      transition-delay: 100ms;
      transition: text-shadow 100ms ease;
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
  div h2{
      transition-delay: 200ms;
    
      border-radius: 10px;
     }
  
  h2{
      font-size: clamp(40px, 8vw, 80px);
      font-weight: 600;
     color: var(--lightest-slate);
     line-height: 1.1;
     }
  div h3{
      transition-delay: 300ms;
      
     }
  h3{
    margin:0;
    margin-top: 10px;
    line-height: 0.9;
    color: var(--slate);
    font-size: clamp(40px, 8vw, 65px);
    
  }
  div p{
    transition-delay: 1s;
    text-align: justify;
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
  }
  p span:hover{
    text-shadow:  0 0 8px white;
  }

  a{
    color: var(--green);
    font-family: var(--font-mono);
    transition: var(--transition);
  }
  .uppercase{
    font-size: clamp(40px, 0vw, 60px);
  }
  @media (max-width: 1080px){
 padding: 0px 100px
  }
  @media (max-width: 768px){
    padding: 0px 50px;
  }   
`