import React from 'react';
import styles from './SkillIcon.module.css';

export default ( props ) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={props.src} alt={props.altText}/>
      <span className={styles.title}>{props.title}</span>
    </div>
  )
}