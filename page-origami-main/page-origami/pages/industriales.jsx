import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import stylesh from '../styles/Home.module.css';
import styles from '../styles/Otro.module.css';
import Layaout from '../components/Layaout';

export default function industriales() {
  return (
    <Layaout
    title="Servicios Industriales"
    description="Servicios Industriales"
    >
    <div className={stylesh.main}>
    <h1>Soluciones Industriales</h1>
        <div className={stylesh.thirteen}>
            <Image 
                priority
                src={"/img/6416387.gif"}
                height={300}
                width={300}
                alt="industria"
                className={stylesh.logo} 
            
            />
        </div>
        <div className={styles.gridContainer}>
            <div className={styles.item1}>
                <Link href="/ernc">
                    <Image
                        priority
                        src={"/img/3660504.png"}
                        height={300}
                        width={300}
                        alt="ernc"
                        className={styles.logoItem} 
                    />
                </Link>
                <p className={styles.descriptionItemC}>Proyectos ERNC</p>
            </div>
            <div className={styles.item1}>
                <Link href="/innovacion">
                    <Image
                        src={"/img/4127293.png"}
                        height={300}
                        width={300}
                        alt="innovacion"
                        className={styles.logoItem} 
                    />
                </Link>
                <p className={styles.descriptionItemC}>Innovación Tecnológica</p>
            </div>
            <div className={styles.item1}>
                <Link href="/construccion">
                    <Image
                        src={"/img/5234709.png"}
                        height={300}
                        width={300}
                        alt="construccion"
                        className={styles.logoItem} 
                    />
                </Link>
                <p className={styles.descriptionItemC}>Sistemas de Construcción Sostenibles</p>
            </div>
            <div className={styles.item1}>
                <Link href="/control">
                    <Image
                        src={"/img/6172515.gif"}
                        height={300}
                        width={300}
                        alt="control"
                        className={styles.logoItem} 
                    />
                </Link>
                <p className={styles.descriptionItemC}>Sistemas de Control y Gestión</p>
            </div>
        </div>
    </div>
    </Layaout>
  )
}
