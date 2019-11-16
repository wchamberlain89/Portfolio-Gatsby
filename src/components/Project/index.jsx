import React from 'react';
import styles from './project.module.css';

export default () => {
  return (
    <div className="outer-container">
      <div className="left-column">
        <img className="logo" src="./../../images/WalkerTrekker.svg"/>
      </div>
      <div className="right-column">
        <p>Lantern Archives is a campaign manager for the board game Kingdom Death. 
          Lantern Archives will track your all your settlements character details and 
          Inventory Lantern Archives is a campaign manager for the board game Kingdom Death. 
          Lantern Archives will track your all your settlements 
          character details and Inventory
        </p>
        <div>
          <a href="#">View Github</a>
          <a href="#">View Details</a>
        </div>
      </div>
    </div>
  )
}