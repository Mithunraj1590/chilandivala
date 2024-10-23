import Icons from '@/common/Icons';
import styles from './Footer.module.scss';
import Link from 'next/link';

export default function index() {
  return (
    <div className={styles.footer}>
        <Link href="/" >
        <Icons icon="Facebook" size={18} color="white"/>
        </Link>
        <Link href="/" >
        <Icons icon="icon-twitter" size={18} color="white"/>
        </Link>
        <Link href="/" >
        <Icons icon="linkdn" size={18} color="white"/>
        </Link>
        <Link href="/" >
        <Icons icon="icon-instagram" size={18} color="white"/>
        </Link>
       
    </div>
  )
}