import React from 'react'
import styled from 'styled-components'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <ContactSection>
        <div className='contact__container'></div>

        <button className='abajo__btn'>
        <Link to='/projects'><BsChevronUp /></Link>
      </button>
    </ContactSection>
  )
}

export default Contact

const ContactSection = styled.section`
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
  .contact__container{
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