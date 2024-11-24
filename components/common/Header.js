import Link from "next/link"
import { TitleLogo } from "./Title"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { RiMenu4Line } from "react-icons/ri"
import { AiOutlineClose } from "react-icons/ai"
import Image from "next/image"

const Header = () => {
  const [activeLink, setActiveLink] = useState("")
  const [open, setOpen] = useState(false)

  const router = useRouter()

  useEffect(() => {
    setActiveLink(router.pathname)

    // Add or remove class to body based on the menu state
    if (open) {
      document.body.classList.add('menu-open');
      document.documentElement.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
      document.documentElement.classList.remove('menu-open');
    }

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove('menu-open');
    }
  }, [router.pathname, open])

  return (
    <>
      <header>
        <div className='container'>
          <div className='logo'>
            <Link href='/'>
              <Image
                src="/images/logo.png"
                width={250}
                height={56}
                alt="logo"
              />
            </Link>
          </div>
          <nav className={open ? "openMenu" : "closeMenu"} onClick={() => setOpen(false)}>
            <Link href='/' className={activeLink == "/" ? "activeLink" : "none"}>
              Home
            </Link>
            <Link href='/agency' className={activeLink == "/agency" ? "activeLink" : "none"}>
              About
            </Link>
            <Link href='/services' className={activeLink == "/services" ? "activeLink" : "none"}>
              Services
            </Link>
            <Link href='/showcase' className={activeLink == "/showcase" ? "activeLink" : "none"}>
              Showcase
            </Link>
            <Link href='/contact' className={activeLink == "/contact" ? "activeLink" : "none"}>
              Contact
            </Link>
            <button className='button-primary'>book a consultation</button>
          </nav>
          <button onClick={() => setOpen(!open)}>
            {open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}
          </button>
        </div>
      </header>
    </>
  )
}

export default Header
