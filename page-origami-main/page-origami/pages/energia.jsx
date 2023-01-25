import React from 'react';
import Image from 'next/image';

import stylesh from '../styles/Home.module.css';
import styles from '../styles/Otro.module.css';
import Layaout from '../components/Layaout';

export default function energia() {
  return (
    <Layaout
    title="Sistemas de Control y Gestión"
    description="Sistemas de Control y Gestión"
    >
    <div className={stylesh.main}>
        <div className={stylesh.thirteen}>
            <Image 
                priority
                src={"/img/learning.png"}
                height={300}
                width={300}
                alt="control"
                className={styles.logoItem} 
            
            />
        </div>
        <h1>UNE - SISTEMAS AUTÓNOMOS DE ENERGÍA LIMPIA </h1>
        <p className={stylesh.card}>
            Generar proyectos de ERNC con comunidades, cooperativas, asociaciones, gremios, ecoaldeas, condominios, clubes y otras agrupaciones sociales mediante las cuales se genera una relación EaaS (Energy as a Service) en proyectos on-grid como off-grid.
        </p>   
        <p className={stylesh.card}>
            Generar pequeños proyectos para cubrir los requerimientos de personas naturales, para proveer de energía limpia y renovable a sus casas y a sus servicios en general, conectados o no a la red de distribución eléctrica existente
        </p> 

    </div>
    </Layaout>
  )
}
