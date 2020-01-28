import React from 'react';
import styles from './project.module.css';
import logo from './../../../images/svg/WalkerTrekker.svg';

require("typeface-rajdhani")

export default () => {
  return (
    <div className={styles.container}>
      <div className={styles.section__container}>
        <img className={styles.logo} src={logo} alt="logo"w/>
      </div>
      <div className={styles.section__container}>
        <p className={styles.body}>Lantern Archives is a campaign manager for the board game Kingdom Death. 
          Lantern Archives will track your all your settlements character details and 
          Inventory Lantern Archives is a campaign manager for the board game Kingdom Death. 
          Lantern Archives will track your all your settlements 
          character details and Inventory
        </p>
        <div>
          
          <a className={styles.button} href="#">View Github</a>
          <a className={styles.button} href="#">View Details</a>
        </div>
      </div>
    </div>
  )
}