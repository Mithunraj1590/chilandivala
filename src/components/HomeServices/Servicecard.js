import React from 'react'
import styles from "./HomeServices.module.scss"
import Link from 'next/link'
import Image from 'next/image'
import Icons from '@/common/Icons'

const Servicecard = ({title}) => {
  return (
    <div className={styles.card}>
        <Link href="/" className="stretched-link" />
     <div className={styles.image}>
        <figure>
            <Image src="/images/service/branding.webp" fill/>
        </figure>
     </div>
     <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac purus sit amet neque mollis tincidunt quis quis velit. Class aptent taciti sociosqu</p>
        <span className={styles.icon}>Learn More
        <Icons icon="arrow-icon" size={14} />
        </span>
     </div>
    </div>
  )
}

export default Servicecard