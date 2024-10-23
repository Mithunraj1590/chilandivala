'use client'

import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'

const SmoothScroller = ({ children }) => {
  const lenisRef = useRef()
  const lenis = useLenis() // Use Lenis hook to access the instance directly

  useEffect(() => {
    if (!lenis) return // Ensure Lenis is initialized

    const update = (time) => {
      lenis.raf(time * 1500) // Call the instance's `raf` method
    }

    gsap.ticker.add(update)
    return () => {
      gsap.ticker.remove(update)
    }
  }, [lenis]) // Ensure the effect runs only when `lenis` is available

  const options = {
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  }

  return (
    <ReactLenis root ref={lenisRef} autoRaf={false} options={options}>
      {children}
    </ReactLenis>
  )
}

export default SmoothScroller
