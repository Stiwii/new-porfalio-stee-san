import React from 'react'
import styled from 'styled-components'
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


  return (
    <ProjectSection>
      <div className='projects__container'>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
          spaceBetween={0}
          slidesPerView={'auto'}
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
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}

        >
          <SwiperSlide>
            <a href='https://pokedex-steeven-sanchez.netlify.app' target="_blank">
              <article className='project'>
                <header>
                  <img src='src/imagenes/project1.png' alt="" />
                </header>
                <h3>POKEDEX</h3>
              
                <ul>
                  <li>▶  Design and development of fully responsive web application;
                  </li>
                  <li>▶  Custom hooks, components, contexts, stores, global variables, among other React JS technologies were implemented;</li>
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
                <h3>RICK AND MORTY APP </h3>
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

        </Swiper>
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

  .projects__container{
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
    height:100%;
     max-height: 450px;
     display: flex;
     justify-content: center;
     align-items: center;
  }
  .swiper{
    position:relative;
    display: flex;
    flex-direction: column;
    gap:20px;
    
    border-radius:10px;
  }
  .swiper-wrapper{
  
  }
  .swiper-pagination{
   position:relative;
   display:flex;
   align-items:center;
   justify-content: center;
  }
  .swiper-pagination-bullet{
    width:15px;
    height:15px;
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
    max-height:150px;
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
    padding-bottom: 3px;
  }

  @media (max-width: 1080px){
 padding: 0px 100px;
 .projects__container{
    padding:10px;
    box-shadow: 20px 20px 50px rgba(0,0,0,0.5);
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.1);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    position: absolute;
    left:40px;
    right: 200px;
    transition: all 500ms;
  }
  }

@media (max-width: 768px){
    padding: 0px 50px;
    .projects__container{
    padding:10px;
    box-shadow: 20px 20px 50px rgba(0,0,0,0.5);
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.1);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    position: absolute;
    left:40px;
    right: 50px;
    transition: all 500ms;
  }
  .swiper{
    
  }

  }   
`