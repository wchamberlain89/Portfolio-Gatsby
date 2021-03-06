import React from 'react';
import Project from '../../Blocks/Project';
import { SectionHeader, WidthContainer } from '../../Bits';

export default () => {
  return (
    <section 
      style={{ 
      width: "100%",
      backgroundColor: "#050505"
      }}
    >
      <WidthContainer>
        <SectionHeader>Projects</SectionHeader>
        <Project/>
        <Project/>
        <Project/>
        <Project/>
      </WidthContainer>
    </section>
  )
}
