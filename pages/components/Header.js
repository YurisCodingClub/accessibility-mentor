import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
        <nav>
            <a href='/' className={styles.nav_item}>Home</a>
            <a  href='/courses' className={styles.nav_item}>Courses</a>
        </nav>
    </header>
  )
}

export default Header