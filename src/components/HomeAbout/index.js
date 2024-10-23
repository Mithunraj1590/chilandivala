import Image from "next/image"
import styles from "./HomeAbout.module.scss"
import Link from "next/link"

const HomeAbout = () => {
    return (
        <section className={styles.homeabout}>
            <div className={styles.webshape}>
               <Image src="/images/shape/web-black.png" alt="shape" width={300} height={300}/>
            </div>
            <div className="container">
                <div className="row  align-items-center">
                    <div className="col-lg-8">
                        <div className={styles.homeabout_img}>
                            <div className={styles.text}>
                                <p>About Us</p>
                                <h2 className={styles.title}>We Create Significant Brands</h2>
                            </div>
                            <div className={styles.shape}>
                            <figure>
                                <Image src="/images/hero/coding.jpg" fill alt="img" />
                            </figure>
                                <div className={styles.vector}>
                                    <div className="position-relative">
                                      <div className={styles.play}>
                                  <Image src="/images/shape/play-reel.png" width={105} height={105}/>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className={styles.homeabout_content}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac purus sit amet neque mollis tincidunt quis quis velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin ipsum tellus, porta eu elit ut, maximus commodo tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam eleifend turpis sed velit feugiat laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit ...</p>
                            <Link href="/about" className="btn btn-primary"><span className="text">Read More</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeAbout