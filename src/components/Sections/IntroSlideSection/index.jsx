import React from 'react';
import styles from './IntroSlideSection.module.scss';

export default () => {
  return (
    <section className={styles.layout__container}>
      <div className={`${styles.panel} ${styles.panel__left}`}>
        <div className={styles.left_card}>
          <h3 className={styles.left_card_text}>I'm some test type look at me. I live in Portland OR, and am a recent graduate of Epicodus.</h3>
        </div>
      </div>
      <div className={`${styles.panel} ${styles.panel__right}`}>
        <h3 className={styles.right_panel_text}>I'm also some test type about meaningful motion.</h3>
      </div>
    </section>
  )
}