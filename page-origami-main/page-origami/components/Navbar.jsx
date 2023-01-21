import React from 'react';
import {Link} from 'react-scroll/modules';
import Links from 'next/link';
import Image from 'next/image';

import styles from '../styles/Otro.module.css';


export const Navbar = () => {
  return (
    <div className={styles.gridContainerC}>
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li className={styles.li}>
                  <Links className={styles.a} href="/">
                    <Image
                      src={"/img/390583.png"}
                      height={200}
                      width={200}
                      alt="ORIGAMI"
                      className={styles.logo} 
                    />
                  </Links>
                </li>

                <li className={styles.li}>
                  <Link 
                    className={styles.a} 
                    to="/"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    Inicio
                  </Link>
                </li>
                <li className={styles.li}>
                  <Link 
                    className={styles.a} 
                    to="nosotros" 
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    Nosotros 
                  </Link>
                </li>
                <li className={styles.li}>
                  <Link 
                    className={styles.a} 
                    to="contacto" 
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    Contacto 
                  </Link>
                </li>
                <li className={styles.li}>
                  <Link 
                    className={styles.a} 
                    to="industriales" 
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    Soluciones Industriales 
                  </Link>
                </li>
                <li className={styles.li}>
                  <Link 
                    className={styles.a} 
                    to="comunitarias" 
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    Soluciones Comunitarias 
                  </Link>
                </li>
            </ul>
        </nav>
    </div>
  
  )
}