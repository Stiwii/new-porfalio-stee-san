import React, { useState } from 'react'
import styled from 'styled-components'
import MenuButton from './MenuButton'


const Navbar = ({home}) => {

  const [homeRef, setHomeRef] = useState(false)
  const [aboutRef, setAboutRef] = useState(false)
  const [skillRef, setSkillRef] = useState(false)
  const [expirienceRef, setExpirienceRef] = useState(false)
  const [projectsRef, setProjectsRef] = useState(false)
  const [contactRef, setContactRef] = useState(false)
const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //pasar de false a true y viceversa
    setClicked(!clicked)
  }

  return (
    <>
      <NavContainer>
        
        <div className={`nav__links ${clicked ? 'active' : ''}`} >
          <a className={`${clicked ? 'active' : ''}`} onClick={handleClick} href="#home">Home</a>
          <a className={`${clicked ? 'active' : ''}`} onClick={handleClick} href="#h">About</a>
          <a className={`${clicked ? 'active' : ''}`} onClick={handleClick} href="#h">Skills</a>
          <a className={`${clicked ? 'active' : ''}`} onClick={handleClick} href="#h">Experience</a>
          <a className={`${clicked ? 'active' : ''}`} onClick={handleClick} href="#h">Projects</a>
          <a className={`${clicked ? 'active' : ''}`} onClick={handleClick} href="#h">Contact</a>
        </div>
        <div className='btn__menu'>
          <MenuButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''} `}></BgDiv>
      </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
  width: 280px; 
  display: flex;
  height:100%;
  background-color: var(--na);
  padding: 5px;

  @keyframes moverDiagonal{
    0%{background-position: 0 50%;}
    50%{background-position: 100 50%;}
    100%{background-position: 0 50%;}
}
  .nav__links{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;  
    justify-content: center;
    /* padding-top:50%; */
    border-left: solid 1px white;
    width: 100%;
    height: 100%;
    max-height: 22rem;
    margin:auto;
    /* background-color: red; */
  }
  a{
    color: var(--lightest-slate)
 }
 a:hover{
  color: var(--green);
  transition:100ms;
 }
 a.active{
  font-size:2rem;
 }
@media(max-width: 768px){
  border: 0;
  width:0;
  .nav__links{
    font-size:2rem;
    position:absolute;
    background: linear-gradient(-45deg, var(--navy) , black, var(--green)  );
    border-radius: 0 0 0 80%;
    border-left: 2px solid var(--green);
    border-bottom:2px solid var(--green);
    top: -700px;
    left: 1000px;
    right:0;
    bottom:0;
    transition: 1s;
  }
  .btn__menu{
    position:absolute;
    top:100px;
    right:50px;
  }
  .nav__links.active{
    position: absolute;
    transition: 0.8s;
    max-height: 100%;
    top:0; 
    right:0; 
    bottom:0; 
    left:0;
    padding-top: 0;
    animation: moverDiagonal 5s ease-linear infinite;
  }
}
@media (min-width: 768px){
  .btn__menu{
  display:none;
 }

}
 
`
const BgDiv = styled.div`
`
