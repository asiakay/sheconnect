import React from 'react';
import Image from 'next/image';
import styles from '../styles/NavigationBar.module.css';

function NavigationBar(){
  return (
    <nav className={styles.navigationbar}>
{/* <Image src="/sheconnect-logo.png" alt="SheConnect logo" className={styles.footerlogo} width="150" height="150"/>
 */}      <form className={styles.searchform}>
        <input type="text" placeholder="Search" className={styles.searchbar} />
        <button type="submit"><i className="fa fa-search"></i></button>
      </form>
      <ul className={styles.navlinks}>
        <li className={styles.navlink}><a href="#">Profile</a></li>
        <li className={styles.navlink}><a href="#">Search</a></li>
        <li className={styles.navlink}><a href="#">Messaging</a></li>
        <li className={styles.navlink}><a href="#">Settings</a></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
