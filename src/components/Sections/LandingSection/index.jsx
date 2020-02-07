import React from 'react';
import styles from './LandingSection.module.scss';
import WidthContainer from '../../Bits/WidthContainer';


export default () => {
  return (
    <section className={ styles.layout__container }>
      <WidthContainer>
        <h1 className={styles.__title}>
          <div>Ward</div>
          <div>Chamberlain</div>
        </h1>

        <h3 className={styles.__subtitle}>
          Front End Developer
        </h3>
      </WidthContainer>  
    </section>
  )
}