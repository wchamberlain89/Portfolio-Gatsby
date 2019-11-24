import React from "react"

import LandingSection from './../components/LandingSection';
import SectionHeader from './../components/SectionHeader';
import Project from './../components/Project';
import WidthContainer from '../components/WidthContainer';
import gatsbyIcon from './../assets/images/gatsby.png';


require("typeface-rajdhani")


const IndexPage = () => (


  <div style={{ 
    backgroundColor: "#050505", 
    maxWidth: "100%", 
  }}>

    
      <LandingSection/> 

    {/*Slide Section*/}
    <section style={{ backgroundColor: "#A72C2C", display: "flex", paddingBottom: "15vh", width: "100%" }}>
      
      {/*Left Black Slide */}
      <div style={{ height: "100vh", width: "calc(50% - 4rem)", display: "flex", alignItems: "center", justifyContent: "center", position: "sticky", top: "0", padding: "0 2rem"}}>
        <div style={{ padding: "0 2rem", backgroundColor: "#050505", display: "flex", justifyContent: "center", alignItems: "center", height: "90%" }}>
          <div style={{ margin: "0 auto", border: "5px solid #FEE400", display: "flex", alignItems: "center", padding: "2rem 2rem", height: "inherits" }}>
            <p style={{ fontFamily: "Rajdhani", fontSize: "4em", color: "#FEE400", lineHeight: "125%" }}>
              Hi there! my name is Ward and I’m a Front-End Developer Located in Portland, Or
            </p>
          </div>
        </div>
      </div>
      
      {/* Right Red Slide */}
      <div style={{ width: "calc(50% - 8em)", backgroundColor: "#A72C2C", padding: "100vh 4em 0 4em" }}>
        <div style={{ height: "100vh", display: "flex", alignItems: "center", position: "sticky", top: "0" }}>
          <p style={{ fontSize: "5em", color: "white", fontFamily: "Rajdhani", lineHeight: "150%", fontWeight: "800" }}>I HAVE A PASSION FOR  MEANINGFUL MOTION, INTERACTIVITY, AND BRINGING  BEAUTIFUL UI / UX DESIGNS TO LIFE</p>
        </div>
      </div>


    </section>

    {/*About Me Section */}
    
      <WidthContainer>
        
        <SectionHeader>About</SectionHeader>
        
        <p style={{ fontFamily: "Rajdhani", fontSize: "2em", fontWeight: "600", color: "white", letterSpacing: "0.1em", lineHeight: "160%", margin: "2em 0"}}>
          I specialize in making Javascript Apps on the Front-End, Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Lorem mattis rhoncus dictum pulvinar. 
          Egestas volutpat tempor massa pellentesque ornare proin sed vehicula. 
          Id at volutpat laoreet amet varius id. Tortor sodales faucibus sit netus.
        </p>
        
        <SectionHeader>Skills</SectionHeader>
        
        <div className="skill-grid">
          <img src={gatsbyIcon}/>
        </div>
      
      </WidthContainer>

    

    {/*Projects Section*/}
    <section style={{ 
      width: "100%",
      backgroundColor: "#050505"
    }}>
      <WidthContainer>
        <SectionHeader style={{marginBottom: "2em"}}>Projects</SectionHeader>
        <Project/>
        <Project/>
        <Project/>
        <Project/>
      </WidthContainer>
    </section>


    {/*Contact Me Section*/}
    <section style={{ backgroundColor: "#FEE400", height: "100vh", width: "100%" }}></section>

    {/*Footer Section*/}
    <footer style={{ backgroundColor: "#050505", minHeight: "20vh"}}></footer>

  </div>

)

export default IndexPage
