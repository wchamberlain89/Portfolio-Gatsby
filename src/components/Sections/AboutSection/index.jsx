import React from 'react';
import styles from './AboutSection.module.css';
import { WidthContainer, SectionHeader } from '../../Bits/';
import { SkillGrid } from '../../Blocks/';

export default () => {
  return (
    <WidthContainer style={{ padding: "4em 0" }}>
          
      <SectionHeader>About</SectionHeader>
      
      <p className={ styles.aboutText }>
        I specialize in making Javascript Apps on the Front-End, Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Lorem mattis rhoncus dictum pulvinar. 
        Egestas volutpat tempor massa pellentesque ornare proin sed vehicula. 
        Id at volutpat laoreet amet varius id. Tortor sodales faucibus sit netus.
      </p>
      
      <SectionHeader>Skills</SectionHeader>
      
      <SkillGrid/>

    </WidthContainer>
  )
}
