import React from 'react';
import { SectionHeader, WidthContainer } from './../../Bits';
import { ContactForm } from './../../Blocks';
export default () => {
  return (
    <section style={{ backgroundColor: "#FEE400", width: "100%", padding: "10vh 0" }}>
      <WidthContainer>
        <SectionHeader alt>Contact Me</SectionHeader>
        <ContactForm/>
      </WidthContainer>
    </section>
  )
}