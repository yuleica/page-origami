import React from 'react';
import Image from 'next/image';

import styles from '../styles/Otro.module.css';
import stylesh from '../styles/Home.module.css';

export default function construccion() {
  return (
    <div className={stylesh.main}>
      <div className={stylesh.thirteen}>
          <Image 
              priority
              src={"/img/brainstorm.png"}
              height={300}
              width={300}
              alt="innovación"
              className={styles.logoItem} 
          
          />
        </div>
        <h1>UNE - SISTEMAS DE CONSTRUCCIÓN SOSTENIBLES</h1>
    
</div>
  )
}
