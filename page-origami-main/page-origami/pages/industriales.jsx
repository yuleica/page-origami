import React from 'react';

import stylesh from '../styles/Home.module.css';
import styles from '../styles/Otro.module.css';

export default function industriales() {
  return (
    <div className={stylesh.main}>
        <div className={styles.gridContainer}>
            <div className={styles.item1}>
                <Link href="/ernc">
                    <Image
                        priority
                        src={"/img/3660504.png"}
                        height={400}
                        width={400}
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
                        height={400}
                        width={400}
                        alt="construccion"
                        className={styles.logoItem} 
                    />
                </Link>
            </div>
            <div className={styles.item1}>
                <Link href="/control">
                    <Image
                        src={"/img/6172515.gif"}
                        height={400}
                        width={400}
                        alt="control"
                        className={styles.logoItem} 
                    />
                </Link>
            </div>
        </div>
    </div>
  )
}
