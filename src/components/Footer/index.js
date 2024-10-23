
import Icons from '@/common/Icons'
import styles from './Footer.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                {/* <div className={styles.footer_logo}>
                    <Image src="/images/logo/logo.png" width={250} height={60} />
                </div> */}
                <div className="row">
                    <div className="col-lg-2">
                        <div className={styles.footer_menu}>
                            <h4>Quick Links</h4>
                            <ul>
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/">About Us</Link></li>
                                <li><Link href="/">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={styles.footer_service}>
                            <h4>Our Services</h4>
                            <ul>
                                <li><Link href="/">Digital Marketing</Link></li>
                                <li><Link href="/">Research & Branding</Link></li>
                                <li><Link href="/">Short film & Ad Film Making</Link></li>
                                <li><Link href="/">Music Videos</Link></li>
                                <li><Link href="/">
                                    Social Media Management</Link></li>
                                <li><Link href="/">
                                    Content Creation</Link></li>
                                <li><Link href="/">

                                    Online Advertising</Link></li>
                                <li><Link href="/">

                                    Gifting Solutions</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className={styles.footer_newsletter}>
                            <h4>Get In Touch</h4>
                            <form action="">
                                <div className={styles.input}>
                                    <input type="email" class="form-control" placeholder="info@yourmail.com" />
                                    <button type='submit'>
                                        <Icons icon="arrow-icon" size={16} color="white" />
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className={styles.footer_icons}>
                            <h4>Follow Us On</h4>
                            <div className='d-flex gap-4'>
                                <Link href="/">
                                    <Icons icon="Facebook" size={18} color="white" />
                                </Link>
                                <Link href="/" >
                                    <Icons icon="icon-twitter" size={18} color="white" />
                                </Link>
                                <Link href="/" >
                                    <Icons icon="linkdn" size={18} color="white" />
                                </Link>
                                <Link href="/" >
                                    <Icons icon="icon-instagram" size={18} color="white" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
               <div className={styles.footer_bottom}>
                 <p>© Chilanthivala 2024 | All Rights Reserved</p>
               </div>
            </div>
        </footer>
    )
}

export default Footer