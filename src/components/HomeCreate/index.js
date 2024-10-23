import Link from "next/link"
import styles from "./Homecreate.module.scss"

const HomeCreate = () => {
    return (
        <section className={styles.homecreate}>
            <div className="container">
                <h2 className={styles.title}>Let Us Create an
                    Amazing Project
                    Together</h2>
                <Link href="/" className="btn btn-primary">Contact Us</Link>
            </div>
        </section>
    )
}

export default HomeCreate