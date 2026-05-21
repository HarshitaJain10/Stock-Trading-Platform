import React from 'react';
import Awards from './Awards';
import Pricing from './Pricing';
import Stats from './Stats';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Hero from './Hero';


function HomePage() {
    return (
        <>
        
        <Hero/>
        <Awards/>
        <Pricing/>
        <Stats/>
        <Education/>
        <OpenAccount/>
       
        </>
      );
}

export default HomePage;