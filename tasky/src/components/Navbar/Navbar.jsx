import React from 'react'
import styles from './styles';

const Navbar = (props) => {
  return (
    <nav style={styles.navbar}>
        <ul style={styles.navbarNav}>
            {props.children}
        </ul>
    </nav>
  )
}

export default Navbar;
