
import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <>
           <div className={styles.footerContainer}>
           <h3>Sébastien VIOLANTE - {new Date().getFullYear()}</h3>
           <Link className={styles.link} href="https://www.linkedin.com/in/sebastien-violante" target="_blank">
            <div className={styles.imgContainer}>
                <Image fill src="/linkedIn.png" alt="linkedIn"/>
            </div>
           </Link>
           </div>
        </>
    )
}