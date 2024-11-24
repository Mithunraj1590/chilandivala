import React from "react"
import { Title, TitleLogo } from "./common/Title"
import Image from "next/image"

const Banner = () => {
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div>
            <Image 
            src="/images/logo.png"
            width={340}
            height={76}
            alt="logo"
            />
            <TitleLogo title='Lets take your business to the next level!' />
          </div>
          <div>
            <button className='button-primary'>Request a call-back</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
