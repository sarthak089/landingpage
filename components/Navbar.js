import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className={styles.mainnav}>
        <ul>
        <Link href='/'><a className={styles.atag}><li>:Home</li></a></Link>
        <Link href='/about'><a className={styles.atag}><li>:About</li></a></Link>
        <Link href='/contact'><a className={styles.atag}><li>:Contact</li></a></Link>
        </ul>
      </nav>
  )
}

export default Navbar