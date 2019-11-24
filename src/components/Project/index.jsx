import React from 'react';
import styles from './project.module.css';
import logo from './../../assets/svg/WalkerTrekker.svg';

require("typeface-rajdhani")

export default () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <img className="logo" src={logo} alt="logo"w/>
      </div>
      <div className={styles.innerContainer}>
        <p className={styles.bodyText}>Lantern Archives is a campaign manager for the board game Kingdom Death. 
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