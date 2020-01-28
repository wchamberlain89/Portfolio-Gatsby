import React from "react"
import { IntroSlideSection, LandingSection, AboutSection, ProjectsSection, ContactSection, FooterSection } from './../components/Sections';
import Triangle from './../images/svg/Triangle.svg';




require("typeface-rajdhani")


const IndexPage = () => (


  <div style={{ 
    backgroundColor: "#050505", 
    maxWidth: "100%", 
  }}>

   
    <LandingSection/>
    <IntroSlideSection/>
    <AboutSection/>
    <img src={Triangle} style={{position: "relative", width: "100%", marginBottom: "4rem", top: "-1px"}}/>
    <ProjectsSection/>
    <ContactSection/>
    <FooterSection/>
    

  </div>

)

export default IndexPage
