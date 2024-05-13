import React from 'react';
import Footer from '@components/Footer/Footer';
import AboutUs from '@pages/Home_Page/About_Us/AboutUs';
import Booking from '@pages/Home_Page/Booking/Booking';
import Games from '@pages/Home_Page/Games/Games';
import Hero from '@pages/Home_Page/Hero/Hero';
import classes from './HomePage.module.css';

const HomePage = ({scrollPosition }) => {
  return (
    <main className="main">
      {/* <AdminOptions /> */}
      <div className={classes.first_tape}></div>
      <Hero/>
      <AboutUs />
      <Games/>
      <Booking scrollPos={scrollPosition}/>
      <Footer/>
    </main>
  )
}

export default HomePage;