

import Hero from './components/Pages/Hero'
import Navbar from './components/Layout/Navbar'
import Products from './components/Pages/Products'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import TopProducts from './components/Pages/TopProducts';
import Banner from './components/Pages/Banner';

function App() {
  useEffect(()=>{
    AOS.init({
      offset : 100,
      duration : 800,
      easing : "ease-in-sine",
      delay : 100,
    });
    AOS.refresh()
  }, [])
  return (
    <main className=''>
    <Navbar/>
    <Hero/>
    <Products/>
    <TopProducts/>
    <Banner/>
  
    </main>
  )
}

export default App
