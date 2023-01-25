import React from 'react';
import Image from 'next/image';

import stylesh from '../styles/Home.module.css';
import styles from '../styles/Otro.module.css';
import Layaout from '../components/Layaout';

export default function tecno() {
  return (
    <Layaout
    title="Innovación Tecnológica"
    description="Innovación Tecnológica "
    >
    <div className={stylesh.main}>
        <div className={stylesh.thirteen}>
            <Image 
                priority
                src={"/img/learning.png"}
                height={300}
                width={300}
                alt="innovación tecnológica"
                className={styles.logoItem} 
            
            />
        </div>
        <h1>UNE - INNOVACIÓN TECNOLÓGICA </h1>
        <p className={stylesh.card}>
            ORIGAMI apoya y desarrolla emprendimientos de innovación tecnológica que sostienen la visión de cuádruple impacto que fomenta el Buen Vivir. Estas innovaciones tecnológicas apuntan a mejorar la calidad de vida de las personas y comunidades, ayudando al desarrollo del Buen Vivir de las mismas.
        </p>   
        <p className={stylesh.card}>
            A través del desarrollo de equipos y dispositivos, la innovación tecnológica apunta directamente a soluciones sostenibles que respondan a necesidades de comunidades
        </p> 
        <p className={stylesh.card}>
            Así mismo, ORIGAMI contempla tres espacios abiertos para el desarrollo de actividades de innovación:
        </p>
        <p className={styles.card}> 
            <b>Innovación Tecnológica Abierta:</b> Foco en las personas y co-creación. Apoyar alianzas y espacios de colaboración con personas, comunidades y empresas para generar innovación tecnológica sostenible, de acuerdo a las necesidades de los usuarios.
        </p>
        <p className={stylesh.card}> 
            <b>Spin-off:</b> Desarrollo e innovación tecnológica propia de ORIGAMI. Sólo para socios ORIGAMI.
        </p>
        <p className={stylesh.card}>
            <b>Innovación no Tecnológica:</b> Innovación en procesos y funcionalidades propios de la organización, tales como la estructura del tipo AMO -Agile Management Office-, y el proceso de donación de un porcentaje de las utilidades de los proyectos a las comunidades involucradas, para su uso en proyectos sociales y sostenibles al interior de las mismas comunidades.
        </p>
    </div>
    </Layaout>
  )
}
