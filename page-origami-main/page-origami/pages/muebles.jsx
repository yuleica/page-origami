import React from 'react';
import Image from 'next/image';

import stylesh from '../styles/Home.module.css';
import styles from '../styles/Otro.module.css';
import Layaout from '../components/Layaout';

export default function house() {
  return (
    <Layaout
    title="Mobiliario Sostenible"
    description="Mobiliario Sostenible"
    >
    <div className={stylesh.main}>
        <div className={stylesh.thirteen}>
            <Image 
                priority
                src={"/img/brainstorm.png"}
                height={300}
                width={300}
                alt="Mobiliario Sostenible"
                className={styles.logoItem} 
            
            />
        </div>
        <h1>UNE - MOBILIARIO SOSTENIBLE </h1>
        <p className={stylesh.card}>
            Los muebles sustentables ayudan a tener un hogar más amigable con el medioambiente .Su diseño contempla materiales naturales y reciclados, contribuyendo al desarrollo de una economía circular.
        </p>   
        
    </div>
    </Layaout>
  )
}
