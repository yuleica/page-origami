import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/Otro.module.css';

export const Industriales = () => {
  return (
    <div className={styles.container} id="intereses">
        <div className={styles.gridContainer}>
            <div className={styles.item1}>
                <Link href="/ernc">
                <Image
                    priority
                    src={"/img/3660504.png"}
                    height={400}
                    width={700}
                    alt="ernc"
                    className={styles.logoItem} 
                />
                </Link>
            </div>
            <div className={styles.item1}>
                <Link href="/innovacion">
                <Image
                    src={"/img/4127293.png"}
                    height={400}
                    width={400}
                    alt="innovacion"
                    className={styles.logoItem} 
                />
                </Link>
            </div>
            <div className={styles.item1}>
                <Link href="/construccion">
                <Image
                    src={"/img/5234709.png"}
                    height={200}
                    width={300}
                    alt="construccion"
                    className={styles.logoItem} 
                />
                </Link>
            </div>
            <div className={styles.item1}>
                <Link href="/control">
                <Image
                    src={"/img/6172515.gif"}
                    height={200}
                    width={300}
                    alt="control"
                    className={styles.logoItem} 
                />
                </Link>
            </div>
        </div>
    </div>
  )
}
