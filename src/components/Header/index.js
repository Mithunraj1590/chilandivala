'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from "./Header.module.scss";
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '../../common/RoundedButton';
import Magnetic from '../../common/Magnetic';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    const button = useRef(null);

    useEffect( () => {
      if(isActive) setIsActive(false)
    }, [pathname])

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight - 400,
                onLeave: () => {gsap.to(button.current, {scale: 1, duration: 0.25, ease: "power1.out"})},
                onEnterBack: () => {gsap.to(button.current, {scale: 0, duration: 0.25, ease: "power1.out"},setIsActive(false))}
            }
        })
    }, [])

    return (
        <>
        <header ref={header} className={styles.header}>
            <div className={styles.logo}>
                <Image src="/images/logo/logo.png" fill/>
            </div>
            <div className={styles.nav}>
                <Magnetic>
                    <div className={styles.el}>
                        <Link href="/">Home</Link>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
                <Magnetic>
                    <div className={styles.el}>
                    <Link href="/about">About Us</Link>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
                <Magnetic>
                    <div className={styles.el}>
                    <Link href="/services">Services</Link>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
                <Magnetic>
                    <div className={styles.el}>
                    <Link href="/contact">Contact Us</Link>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
            </div>
        </header>
        <div ref={button} className={styles.headerButtonContainer}>
            <Rounded onClick={() => {setIsActive(!isActive)}} className={`${styles.button}`}>
                <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
            </Rounded>
        </div>
        <AnimatePresence mode="wait">
            {isActive && <Nav />}
        </AnimatePresence>
        </>
    )
}