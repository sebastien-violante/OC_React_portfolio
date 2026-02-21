'use client'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import styles from './Navigation.module.css'

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
    const closeMenu = () => {
    setIsOpen(false)
  }
 return (
   <nav className={styles.nav}>
     <div className={styles.container}>
       <Link href="/" className={styles.logo} onClick={closeMenu}>
          Mon Portfolio
        </Link>
        {/* Bouton burger pour mobile */}
        <button 
          className={styles.burger}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className={isOpen ? styles.burgerOpen : ''}></span>
          <span className={isOpen ? styles.burgerOpen : ''}></span>
          <span className={isOpen ? styles.burgerOpen : ''}></span>
        </button>

       <ul className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
         <li>
           <Link href="/" className={styles.link}>
             Accueil
           </Link>
         </li>
         <li>
           <Link href="/projets" className={styles.link}>
             Projets
           </Link>
         </li>
         <li>
           <Link href="/formations" className={styles.link}>
             Formations
           </Link>
         </li>
         <li>
           <Link href="/contact" className={styles.link}>
             Contact
           </Link>
         </li>
       </ul>
     </div>
   </nav>
 )
}