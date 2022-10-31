import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import MenuButton from './navbar/MenuButton'
import { AiFillHome, AiFillProject, AiOutlineContacts } from 'react-icons/ai';
import { HiInformationCircle } from 'react-icons/hi';

import { GiSkills } from 'react-icons/gi';
import { FaBookReader } from 'react-icons/fa';
import { GrProjects } from 'react-icons/gr';
// import { FaBookReader } from 'react-icons/fa';

const Navbar = ({setClicked, clicked}) => {



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
          <NavLink onClick={handleClick} className={`nav__word ${clicke ? 'active' : ''}`} to='/' end><AiFillHome /></NavLink>
          <NavLink onClick={handleClick} className={`nav__word ${clicke ? 'active' : ''}`} to='/about' >About <HiInformationCircle/></NavLink>
          <NavLink onClick={handleClick} className={`nav__word ${clicke ? 'active' : ''}`} to='/skills' ><GiSkills /> Skills</NavLink>
          <NavLink onClick={handleClick} className={`nav__word ${clicke ? 'active' : ''}`} to='/experience' >Experience <FaBookReader/></NavLink>
          <NavLink onClick={handleClick} className={`nav__word ${clicke ? 'active' : ''}`} to='/projects' ><AiFillProject/> Projects</NavLink>
          
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
  width: 260px; 
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
  
    width: 100vw;
    height: 100vh;
   
    margin:auto;
    top:0;
  }
  .nav__word{
    padding:10px;
    box-shadow: 20px 20px 50px rgba(0,0,0,0.5);
    /* border-radius: 15px; */
    background: rgba(255, 255, 255, 0.1);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    width: 100%;
    max-width: 160px;
    text-align:center;
    text-transform: capitalize;
  }
  .nav__word:hover{
    transform:translateY(-5px) scale(1.01);
    transition: all 500ms;
  }
  .nav__word.active{
    text-shadow:  0 0 8px white;
  }
  a{
    color: var(--lightest-slate)
 }
 a:hover{
  color: var(--green);
  transition:100ms;
  text-shadow:  0 0 8px white;
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
    right: -2000px;
    right:0;
    bottom:0;
    transition: .1s;
    
  }
  .btn__menu{
    position:absolute;
    top:50px;
    right:50px;
    z-index:100;
  }
  .nav__links.active{
    position: absolute;
    max-height: 100vh;
    max-width:100vw;
    top:-40px; 
    right: 0px; 
    bottom:0; 
    left:0px;
    padding-top: 0;
    z-index:100;
  

  }
}

@media (max-width: 769px){
  background-color: var(--na);
} 

@media (min-width: 768px){
  
  .btn__menu{
  display:none;
 }

}
 
`
