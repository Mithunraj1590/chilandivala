import { Title, TitleSm } from "@/components/common/Title"
import React from "react"
import { FaFacebookF,FaLinkedinIn,FaInstagram   } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiHeadphones, FiHelpCircle } from "react-icons/fi"
import { IoLocationOutline } from "react-icons/io5"

const Contact = () => {
  return (
    <>
      <section className='contact bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='CONTACT' /> <br />
            <br />
            <Title title="Let's start right now!" className='title-bg' />
          </div>
          <div className='content py flex1'>
            <div className='left w-30'>
              <div className='contact-deatils'>
                <div className='box'>
                  <FiHeadphones size={30} className='icons' />
                  <h3>+91 xxx xxx xxxx</h3>
                  <span>Call us: Mon - Sat 9:00am - 6:00pm</span>
                </div>
                <div className='box'>
                  <IoLocationOutline size={30} className='icons' />
                  <h3>Cochin</h3>
                  <span>4th Floor, Thapasya Building<br></br>
                  Infopark Phase - 1, Kakkanad,<br></br> Cochin - 682042</span>
                </div>
                <div className='box'>
                  <FiHelpCircle size={30} className='icons' />
                  <h3>info@spiderline.in</h3>
                  <span>Drop us a line anytime!</span>
                </div>
              
              </div>
              <ul>
                <li className='icon'>
                <FaFacebookF size={25} />
                </li>
                <li className='icon'>
                <FaXTwitter size={25} />
                </li>
                <li className='icon'>
                <FaLinkedinIn size={25} />
                </li>
                <li className='icon'>
                <FaInstagram size={25} />
                </li>
              </ul>
            </div>
            <div className='right w-70'>
              <TitleSm title='Make an online enquiry' />
              <p className='desc-p'>Got questions? Ideas? Fill out the form below to get our proposal. </p>

              <form>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>Name</span>
                    <input type='text' />
                  </div>
                  <div className='inputs'>
                    <span>Email</span>
                    <input type='text' />
                  </div>
                </div>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>your budget</span>
                    <input type='text' />
                  </div>
                  <div className='inputs'>
                    <span>timeframe</span>
                    <input type='text' />
                  </div>
                </div>
                <div className='inputs'>
                  <span>TELL US A BIT ABOUT YOUR PROJECT*</span>
                  <textarea cols='30' rows='10'></textarea>
                </div>
                <button className='button-primary'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
