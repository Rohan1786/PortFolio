import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Components/Home/Home';
import YoutubeProfilePage from './Components/YouTube/YoutubeProfilePage';
import Contact from './Components/Contact/Contact';

import { ThemeProvider } from './ThemeContext';
import About from './Components/About/About';






const App = () => {
  

  return (
    
    
    <>
      {/* <button className='bg-white text-black'
     onClick={getUser} >Hello Click me</button>
      <Navbar user={user}/> */}
       <ThemeProvider>
     
   
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/YoutubeProfilePage' element={<YoutubeProfilePage/>}/>
      <Route path='/About' element={<About />}/>
      <Route path='/Contact' element={<Contact/>}/>
    
      
      
        </Routes>
        </BrowserRouter>
        </ThemeProvider>
    </>
  )
}

export default App