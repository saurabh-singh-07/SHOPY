

import Hero from './components/Pages/Hero'
import Navbar from './components/Layout/Navbar'
import Products from './components/Pages/Products'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import TopProducts from './components/Pages/TopProducts';
import Banner from './components/Pages/Banner';
import Subcribe from './components/Pages/Subcribe';
import Testimonials from './components/Pages/Testimonials';

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
    <>
    <Navbar/>
    <main className=''>
      <Hero/>
      <Products/>
      <TopProducts/>
      <Banner/>
      <Subcribe/>
      <Products/>
       <Testimonials/> 
    </main>
    </>
  )
}

export default App
