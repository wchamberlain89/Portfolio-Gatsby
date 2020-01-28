import React from 'react';
import styles from './LandingSection.module.scss';
import WidthContainer from '../../Bits/WidthContainer';


export default () => {
  return (
    <section className={styles.section__container}>
      <WidthContainer>
        
          <div className={styles.logoText__container}>
              
              <h1 className={styles.logoText__title}>
                <div>Ward</div>
                 <div>Chamberlain</div>
              </h1>

              <h3 className={styles.logoText__subtitle}>
                Front End Developer
              </h3>
            
          </div>
          
          
          
        
      </WidthContainer>  
    </section>
  )
}