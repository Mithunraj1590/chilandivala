import Link from "next/link"
import { TitleLogo } from "./Title"
import { FaFacebookF,FaLinkedinIn,FaInstagram   } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div className='logo'>
            <Image
             src="/images/logo.png"
             width={250}
             height={56}
             alt="logo"
             />
              <br />
              <br />
              <span>
                Questions?  Reach us <br /> Monday – Friday from 9 am to 6 pm
              </span>
              <br />
              <br />
              <h3>+91 xxx xxx xxxx</h3>
              <br />
              <button className='button-primary'>Request for quote</button>
            </div>
            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href='/about'>About</Link>
              </li>
              <li>
                <Link href='/showcase'>Showcase</Link>
              </li>
              <li>
                <Link href='/blogs'>Blog</Link>
              </li>
             
              <li>
                <Link href='/'>Contact</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href='/'>Digital Marketing</Link>
              </li>
              <li>
                <Link href='/'>Short film & Ad Film Making</Link>
              </li>
              <li>
                <Link href='/'>Social Media Management</Link>
              </li>
              <li>
                <Link href='/'>Online Advertising</Link>
              </li>
              <li>
                <Link href='/'>Research & Branding</Link>
              </li>
              <li>
                <Link href='/'>Music Videos</Link>
              </li>
              <li>
                <Link href='/'>Content Creation</Link>
              </li>
              <li>
                <Link href='/'>Gifting Solutions</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className='connect'>
                <li>
                  <Link href='/'>
                  <FaFacebookF size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  <FaXTwitter size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  <FaLinkedinIn size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  <FaInstagram size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>© 2024 CHILANDIVALA. ALL RIGHTS RESERVED.</span>
            </div>
            <div className='connect'>
              <span>SPIDERLINE TECHNOLOGIES</span>
              <span> &nbsp; | &nbsp; </span>
              <span>TERMS & CONDITIONS</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
