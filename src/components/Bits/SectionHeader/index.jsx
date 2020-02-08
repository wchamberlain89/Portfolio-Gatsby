import React from 'react';
import styles from './SectionHeader.module.scss';

const SectionHeader = (props) => {
  return (
    <h2 className={ `${styles.sectionHeader} ${(props.alt ? styles.alt : '')}` } {...props}>
      { props.children }
    </h2>
  )
}

export default SectionHeader;