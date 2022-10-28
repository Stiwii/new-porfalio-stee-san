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
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";


function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [clicked, setClicked] = useState(false)
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

            <article className="App" >
              <header className='header__app'>
                <h1 className='letter__S' onClick={() => setClicked(false)}><Link to='/'>S</Link></h1>

                <div className='foto_container'>
                  <img className='foto' src="./public/identidad/fotoSinFondo.png" alt="" />
                </div>

              </header>
              <div className="app_body">
                <Routes>


                  <Route path='/' element={<Home />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/skills' element={<Skills />} />
                  <Route path='/experience' element={<Experience />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/contact' element={<Contact />} />
                </Routes>
                <Navbar
                  setClicked={setClicked}
                  clicked={clicked}
                />
              </div>
            </article>


          </div>
      }
    </>
  )
}

export default App
