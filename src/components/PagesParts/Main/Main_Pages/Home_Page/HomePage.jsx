import React, { useEffect } from 'react'
import AdminOptions from './Admin_options/AdminOptions';
import AboutUs from './About_Us/AboutUs';
import Booking from './Booking/Booking';
import { useState } from 'react';
import Articles from './Articles/Articles';
import classes from './HomePage.module.css'
import Hero from './Hero/Hero';
import Games from './Games/Games';

const HomePage = () => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
  };
  
  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
  
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
    <main className="main">
      {/* <AdminOptions /> */}
      <div className={classes.first_tape}></div>
      <Hero/>
      <AboutUs />
      <Games/>
      <Booking scrollPos={scrollPosition}/>
    </main>
  )
}

export default HomePage;