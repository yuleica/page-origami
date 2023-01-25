import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Layaout from '../components/Layaout';
import stylesh from '../styles/Home.module.css';
import styles from '../styles/Otro.module.css';


export const comunitarias = () => {
  return (
    <Layaout
      title="Soluciones Comunitarias"
      description="Soluciones Comunitarias"
    >
    <div className={stylesh.main}>
    <h1>Soluciones Comunitarias</h1>
        <div className={stylesh.thirteen}>
            <Image 
                priority
                src={"/img/creativity.png"}
                height={300}
                width={300}
                alt="comunitaria"
                className={styles.logoItem} 
            
            />
        </div>
        <div className={styles.gridContainer}>
            <div className={styles.item1}>
                <Link href="/energia">
                    <Image
                        priority
                        src={"/img/"}
                        height={300}
                        width={300}
                        alt="energia"
                        className={styles.logoItem} 
                    />
                </Link>
                <p className={styles.descriptionItemC}>Sistemas Autónomos de Energía Limpia </p>
            </div>
            <div className={styles.item1}>
                <Link href="/agua">
                    <Image
                        src={"/img/"}
                        height={300}
                        width={300}
                        alt="agua"
                        className={styles.logoItem} 
                    />
                </Link>
                <p className={styles.descriptionItemC}>Sistemas de Gestión de Aguas</p>
            </div>
            <div className={styles.item1}>
                <Link href="/tecno">
                    <Image
                        src={"/img/5234709"}
                        height={300}
                        width={300}
                        alt=" innovación tecnológica"
                        className={styles.logoItem} 
                    />
                </Link>
                <p className={styles.descriptionItemC}>Innovación Tecnológica</p>
            </div>
            <div className={styles.item1}>
                <Link href="/house">
                    <Image
                        src={"/img/6416387"}
                        height={300}
                        width={300}
                        alt="casa sostenible"
                        className={styles.logoItem} 
                    />
                </Link>
                <p className={styles.descriptionItemC}>Casas Sostenibles</p>
            </div>
            <div className={styles.item1}>
                <Link href="/muebles">
                    <Image
                        src={"/img/3660504"}
                        height={300}
                        width={300}
                        alt="mobiliario sostenible"
                        className={styles.logoItem} 
                    />
                </Link>
                <p className={styles.descriptionItemC}>Mobiliario Sostenible</p>
            </div>
        </div>
    </div>
    </Layaout>
  )
}
