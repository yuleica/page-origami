import React from 'react';

import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import {Nosotros} from '../components/Nosotros';
import { Industriales } from '../components/Industriales';
import { Comunitarias } from '../components/Comunitarias';
import { Contacto } from '../components/Contacto';

export default function Home() {
  return (
    <div>
        <Navbar />
        <Nosotros />        
        <Industriales />
        <Comunitarias />
        <Contacto />
        <Footer />
    </div>
  )
}
