import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import MenuButton from './navbar/MenuButton'


const Navbar = ({home}) => {


const [clicked, setClicked] = useState(false)
const [clicke, setClicke] = useState(false)
  const handleClick = () => {
    //pasar de false a true y viceversa
    setClicked(!clicked)
    // setClicke(!clicke)
  }

  

  return (
    <>
      <NavContainer>
        
        <div className={`nav__links ${clicked ? 'active' : ''}`} >
          <NavLink onClick={handleClick} className={`nav__word ${clicke ? 'active' : ''}`} to='/' end>Home</NavLink>
          <NavLink onClick={handleClick} className={`nav__word ${clicke ? 'active' : ''}`} to='/about' >About</NavLink>
          <NavLink onClick={handleClick} className={`nav__word ${clicke ? 'active' : ''}`} to='/skills' >Skills</NavLink>
          <NavLink onClick={handleClick} className={`nav__word ${clicke ? 'active' : ''}`} to='/experience' >Experience</NavLink>
          <NavLink onClick={handleClick} className={`nav__word ${clicke ? 'active' : ''}`} to='/projects' >Projects</NavLink>
          <NavLink onClick={handleClick} className={`nav__word ${clicke ? 'active' : ''}`} to='/contact' >Contact</NavLink>
        </div>
        <div className='btn__menu'>
          <MenuButton clicked={clicked} handleClick={handleClick} />
        </div>
        
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
  }
  .nav__word{
    
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
  color: var(--green);
 }

 @media(max-width: 1080px){
  width: 200px; 
 }
@media(max-width: 768px){
  border: 0;
  width:0;
  .nav__links{
    font-size:1.5rem;
    position:absolute;
    background: linear-gradient(-45deg, black ,  var(--navy) , var(--green)  );
    border-radius: 0 0 0 80%;
    border-left: 2px solid var(--green);
    border-bottom:2px solid var(--green);
    top: -2000px;
    left: -2000px;
    right:0;
    bottom:0;
    transition: 1s;
    
  }
  .btn__menu{
    position:absolute;
    top:50px;
    right:50px;
  }
  .nav__links.active{
    position: absolute;
    transition: 0.8s;
    max-height: 100vh;
    max-width:100vw;
    top:-40px; 
    right: 0px; 
    bottom:0; 
    left:0px;
    padding-top: 0;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    z-index:100;
    /* animation: moverDiagonal 5s ease-linear infinite; */
  }
}
@media (min-width: 769px){
  .btn__menu{
  display:none;
 }

}
 
`
