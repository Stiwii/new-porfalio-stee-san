import { useEffect, useState } from 'react'
import './App.css'
import Home from './components/Home'
import Load from './components/Load'
import Navbar from './components/Navbar'

function App() {
const [isLoading, setIsLoading] = useState(true)

useEffect(()=>{
  setTimeout(()=>{
    setIsLoading(false)
  },2000)
},[])
  return (
    <>
    {
      isLoading ?
      <Load />:
    <div className='app-color'>
     
        <div className="App">

          
     <Home />
     <Navbar />
        </div>
     

    </div>
    }
    </>
  )
}

export default App
