import React from "react"
import { IntroSlideSection, LandingSection, AboutSection, ProjectsSection, ContactSection, FooterSection } from './../components/Sections';




require("typeface-rajdhani")


const IndexPage = () => (


  <div style={{ 
    backgroundColor: "#050505", 
    maxWidth: "100%", 
  }}>

   
    <LandingSection/>
    <AboutSection/>
    <ProjectsSection/>
    <ContactSection/>
    <FooterSection/>
    

  </div>

)

export default IndexPage
