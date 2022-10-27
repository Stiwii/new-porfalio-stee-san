import { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Home from './components/Home'
import Load from './components/Load'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper";


function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2500)
  }, [])
  return (
    <>
      {
        isLoading ?
          <Load /> :
          <div className='app-color'>
            <div className="triangle__container">
              <div className=" triangle triangle1"></div>
              <div className=" triangle triangle2"></div>
              <div className=" triangle triangle3"></div>
            </div>
            <div className="App">
              <h1 className='letter__S'><Link to='/'>S</Link></h1>
              <Routes>
                <Swiper
                  effect={"cube"}
                  grabCursor={true}
                  cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                  }}
                  pagination={true}
                  modules={[EffectCube, Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    
                  </SwiperSlide>
                  <SwiperSlide>
                    
                  </SwiperSlide>
                  <SwiperSlide>
                    
                  </SwiperSlide>
                  <SwiperSlide>
                   
                  </SwiperSlide>
                </Swiper>
              
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/skills' element={<Skills />} />
              <Route path='/experience' element={<Experience />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
            <Navbar />
          </div>


          </div>
      }
    </>
  )
}

export default App
