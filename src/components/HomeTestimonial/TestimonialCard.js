"use client"
import React from 'react'
import styles from "./HomeTestimonial.module.scss"
import Image from 'next/image'

const TestimonialCard = () => {
  return (
    <div className={styles.card}>
       <Image src="/images/tesitmonial/quote.png" width={46} height={36}/>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat odio et urna venenatis venenatis. Curabitur non velit libero.</p>
       <div className={styles.card_footer}>
           <div className={styles.user}>
            <Image src="/images/tesitmonial/2.jpg" width={50} height={50} alt="user"/>
           </div>
           <div>
            <strong>Name</strong>
            <p>Desination</p>
           </div>
        </div>    
    </div>
  )
}

export default TestimonialCard