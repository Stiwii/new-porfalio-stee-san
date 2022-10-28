import React, { useState } from 'react'
import styled from 'styled-components'
import { BsChevronDown,BsChevronUp } from 'react-icons/bs';

// import Swiper core and required modules


import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-coverflow";
import { Link, useNavigate } from 'react-router-dom';


const Projects = () => {
  const navigate = useNavigate()
  const [slides, setSlides] = useState(2)

  return (
    <ProjectSection>
      <div className='projects__container'>
        <h1><span>Projects</span></h1>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
          spaceBetween={10}
          breakpoints={{
            769: { slidesPerView: 1.5},
          }}
          slidesPerView={1}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}

        >
          <SwiperSlide>
            <a href='https://pokedex-steeven-sanchez.netlify.app' target="_blank">
              <article className='project'>
                <header>
                  <img className='img' src='src/imagenes/project1.png' alt="" />
                </header>
                <h3><span>POKEDEX</span> </h3>
              
                <ul>
                  <li>▶  Design and development of fully responsive web application;
                  </li>
                  <li>▶  Custom hooks, components, contexts, stores, global variables;</li>
                  <li>▶  The application was tested by non-programmers with an excellent interface result.</li>
                </ul>
              </article>
                </a>
            
          </SwiperSlide>
          <SwiperSlide>
            <a href='https://rick-morty-app-st-san.netlify.app' target="_blank">
              <article className='project'>
                <header>
                  <img src='src/imagenes/project2.png' alt="" />
                </header>
                <h3><span>RICK AND MORTY APP</span>  </h3>
                <ul>
                  <li>▶  Design and development of fully responsive web application;
</li>
                  <li>▶  User friendly interface;</li>
                  <li>▶  Implementation of React JS technologies as components, asynchronous calls, global variable contexts, hooks;</li>
                </ul>
              </article>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href='https://crud-project-steeven-sanchez.netlify.app' target="_blank">
              <article className='project'>
                <header>
                  <img src='src/imagenes/project3.png' alt="" />
                </header>
                <h3>CRUD project</h3>
                <ul>
                  <li>▶  Create, Read, Update and Delete users from a backend provided by Academlo.
</li>
                  <li>▶  Fully responsive model.</li>
                  <li>▶  Use of manners.</li>
                  <li>▶  Clear and defined design using CSS.</li>
                </ul>
              </article>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href='https://proyecto-steeven.netlify.app' target="_blank">
              <article className='project'>
                <header>
                  <img src='src/imagenes/project5.png' alt="" />
                </header>
                <h3>RANDOM PHRASES</h3>
                <ul>
                <li>▶   Design and development of fully responsive web application.</li>
                  <li>▶  Managment of json documents</li>
                  <li>▶  Clear and defined design using CSS.</li>
                </ul>
              </article>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href='https://weather-app-steeven-sanchez.netlify.app' target="_blank">
              <article className='project'>
                <header>
                  <img src='src/imagenes/project4.png' alt="" />
                </header>
                <h3>
                WEATHER-APP
                </h3>
                <ul>
                  <li>▶   Design and development of fully responsive web application.</li>
                  <li>▶  Asynchronous calls, hooks.</li>
                  <li>▶  Clear and defined design using CSS.</li>
                </ul>
              </article>
            </a>
          </SwiperSlide>

        </Swiper>
      </div>


      <div className='up-down'>

<button className='arriba__btn'>
  <Link to='/experience'><BsChevronUp /></Link>
</button>
{/* <button className='abajo__btn'>
  <Link to='/contact'><BsChevronDown /></Link>
</button> */}
</div>
    </ProjectSection>
  )
}

export default Projects

const ProjectSection = styled.section`
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

  .projects__container{
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
    height:100%;
    
     max-height: 450px;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     transition: all 500ms;
     
  }
  .projects__container:hover{
    transform:translateY(-5px) scale(1.01);
    transition: all 500ms;
  }
 
 
  .swiper{
    position:relative;
    display: flex;
    flex-direction: column;
    /* gap:20px; */
    border-radius:10px;
    height:100%;
    width:100%;
    top:0;
  }
  .swiper-wrapper{

  }
  .swiper-pagination{
   position:relative;
   display:flex;
   align-items:center;
   justify-content: center;
   position:absolute;
   bottom: 0;
  }
  .swiper-pagination-bullet{
    width:15px;
    height:15px;

  }
  .swiper-pagination-bullet-active{
    background-color: var(--green);
  }
  .swiper-slide{
    
    display:flex;
    justify-content:center;
    align-items:center;  
   
  }
  .project{
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    text-align:center;
    width:100%;
    height:100%;
    max-width:400px;
    max-height:300px;
    border-radius: 10px;
    overflow:hidden;
    color: white;
    font-size: 14px;
    /* border:1px solid black; */
  }
  .project img{
    max-width: 100%;
    height:100%;
    max-height:120px;
    border-radius:10px;
    margin-bottom:5px;
    box-shadow: 2px 2px 2px black;
  }

  .swiper-button-next, .swiper-button-prev{
    z-index: 11;
    border-radius: 50%;
    aspect-ratio: 1;
    background-color: #ffffffa3;
    height: 50px;
    width:50px;
    color:red;
  }

  .swiper-button-next:after, .swiper-button-prev:after{
    font-size:25px;
    font-weight: 1000px;
    
  }

  ul{

  }
  li{
    margin-left: 2px;
    list-style: square;
    text-align: left;
    font-size:16px;
    animation: open 1000ms ease;
  }
  img:hover{
  transform: scale(1.03);
}
h1{ 
  margin-top: 20px;
      font-size: clamp(18px, 5vw, 22px);
      font-weight: 400;
    
   }
h1 span {
  font-size: clamp(30px, 5vw, 40px);
  -webkit-text-stroke: 1px var(--green);
color: white; 
animation: open 1000ms ease;

}
h3{
  color: #64ffdb9c;
  -webkit-text-stroke: white .1px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
h3 span{
 
  animation: open 1000ms ease;
}

  @media (max-width: 1080px){
 padding: 0px 100px;
 .projects__container{

    left:40px;
    right: 200px;
    transition: all 500ms;
  }
  }

@media (max-width: 769px){
    padding: 0px 50px;
    .projects__container{
  
    left:20px;
    right: 20px;
    transition: all 500ms;
  }


  }   
`