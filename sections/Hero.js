import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import ThreeDModel from "@/components/ThreeDModel"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard, Brand } from "@/components/router"
import Image from "next/image"
import React from "react"

const Hero = () => {
  return (
    <>
      <ThreeDModel />
      <section className='hero'>
        <div className='container'>
      
          <h1 className='hero-title'>WE BUILD DIGITAL EXPERIENCES</h1>

        
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='We Create Significant Brands' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac purus sit amet neque mollis tincidunt quis quis velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin ipsum tellus, porta eu elit ut, maximus commodo tellus.</p>
          </div>
          <div className='hero-content grid-4'>
            {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='green'>{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Testimonial />
      <ShowCase />
      <Brand />

      <div className='heading-title'>
        <Title title='Latest news & articles' />
      </div>
      <BlogCard />
    </>
  )
}

export default Hero
