import React from 'react';
import Links from 'next/link';
import Image from 'next/image';

import styles from '../styles/Home.module.css';


export const Navbar = () => {
  return (
    <div className={styles.navContainer}>
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
                  <Links 
                    className={styles.a} 
                    href="/"
                  >
                    Inicio
                  </Links>
                </li>
                <li className={styles.li}>
                  <Links 
                    className={styles.a} 
                    href="/nosotros" 
                  >
                    Nosotros 
                  </Links>
                </li>
                <li className={styles.li}>
                  <Links 
                    className={styles.a} 
                    href="/industriales" 
                  >
                    Soluciones Industriales 
                  </Links>
                </li>
                <li className={styles.li}>
                  <Links 
                    className={styles.a} 
                    href="/comunitarias" 
                  >
                    Soluciones Comunitarias 
                  </Links>
                </li>
                <li className={styles.li}>
                  <Links 
                    className={styles.a} 
                    href="/contacto" 
                  >
                    Contacto 
                  </Links>
                </li>
            </ul>
        </nav>
    </div>
  
  )
}