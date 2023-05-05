import React from 'react'
import Navbar from './Navbar';
import './App.css'
import Main from './Main';
import Cards from './Cards';
import ServicesSection from './ServicesSection';
import TrendingSection from './TrendingSection';
import HeroSection from './HeroSection';
import Footer from './Footer';

function App(){
  return (
    <>
    <Navbar/>
    <Main/>
    <ServicesSection heading="Services Section"/>
    <TrendingSection  heading="Trending Section"/>
    <HeroSection heading="HeroSection Section"/>
    <Footer/>
    </>
    
    
  )
}
export default App;