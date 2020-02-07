import React from 'react'
import styles from './WidthContainer.module.scss';

export default ( props ) => {
  return (
    <div className={styles.container} { ...props }>{props.children}</div>
  )
}