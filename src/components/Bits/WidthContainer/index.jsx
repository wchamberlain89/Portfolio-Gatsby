import React from 'react'
import styles from './WidthContainer.module.css'

export default ( props ) => {
  return (
    <div className={styles.container} { ...props }>{props.children}</div>
  )
}