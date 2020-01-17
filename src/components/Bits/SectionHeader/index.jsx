import React from 'react';
import styles from './SectionHeader.module.css';

const SectionHeader = (props) => {
  return (
    <h2 className={ styles.sectionHeader } {...props}>
      { props.children }
    </h2>
  )
}

export default SectionHeader;