import React from 'react'
import styles from "./HomeServices.module.scss"
import Servicecard from './Servicecard'

const HomeServices = () => {
  return (
    <section className={styles.homeservice}>
        <div className="container">
            <h2 className={styles.title}>Our Services</h2>
            <div className="row">
                <div className="col-lg-6">
                    <Servicecard title="Digital Marketing"/>
                </div>
                <div className="col-lg-6">
                <Servicecard title="Social Media Management" />
                </div>
                <div className="col-lg-6">
                <Servicecard title="Research & Branding" />
                </div>
                <div className="col-lg-6">
                <Servicecard title="Content Creation" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeServices