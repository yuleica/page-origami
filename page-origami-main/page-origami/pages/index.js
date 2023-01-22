import React from 'react';

import { Navbar } from '../components/Navbar';
import { Portada } from '../components/Portada';
import { Footer } from '../components/Footer';


export default function Home() {
  return (
    <div>
        <Navbar />  
        <Portada />     
        <Footer />
    </div>
  )
}
