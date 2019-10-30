import React from "react"
import SectionHeader from './../components/SectionHeader';

require("typeface-rajdhani")

const IndexPage = () => (


  <div style={{ 
    backgroundColor: "#050505", 
    maxWidth: "100%", 
  }}>

    {/*Main Intro Section*/}
    <section style={{ 
      height: "100vh", 
      width: "100%", 
      backgroundColor: "#FEE400"
    }}>

      <div className="section-width-container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5vw", position: "relative", top: "50%", transform: "translateY(-50%)", width: "100%", }}>
        
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5em" }}>

          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            
            {/*Title Text */}
            <h1 style={{ 
              fontFamily: "Rajdhani", 
              fontSize: "6rem", 
              fontWeight: "800",
              lineHeight: "110%",
              letterSpacing: "0.1em",
              marginBottom: ".15em"
            }}>
              <div>Ward</div>
              <div>Chamberlain</div>
            </h1>

            <h3 style={{
              fontFamily: "Rajdhani",
              fontSize: "2.25rem",
              letterSpacing: "0.2em"
            }}>
              Front End Developer
            </h3>
          
          </div>

          {/* Menu Links */}
          <nav style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <button style={{ fontFamily: "Rajdhani", fontSize: "1.5em", letterSpacing: "0.1em", fontWeight: "600", padding: "1.75em 0" }}>About</button>
            <button style={{ fontFamily: "Rajdhani", fontSize: "1.5em", letterSpacing: "0.1em", fontWeight: "600", padding: "1.75em 0" }}>Projects</button>
            <button style={{ fontFamily: "Rajdhani", fontSize: "1.5em", letterSpacing: "0.1em", fontWeight: "600", padding: "1.75em 0" }}>Contact</button>
          </nav>

        </div>
        
        {/* Arrow Indicator */}
        <div style={{ width: "45px", height: "45px", backgroundColor: "#050505", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="31" height="20" viewBox="0 0 31 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3L15.5 17L28 3" stroke="#FEE400" stroke-width="2" stroke-linecap="square"/>
          </svg>
        </div>

      </div>

    </section>
      

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
      <div style={{ width: "calc(50% - 8em)", backgroundColor: "#A72C2C", padding: "0 4em 100vh 4em" }}>
        <div style={{ height: "100vh", display: "flex", alignItems: "center" }}>
          <p style={{ fontSize: "5em", color: "white", fontFamily: "Rajdhani", lineHeight: "150%", fontWeight: "800" }}>I HAVE A PASSION FOR  MEANINGFUL MOTION, INTERACTIVITY, AND BRINGING  BEAUTIFUL UI / UX DESIGNS TO LIFE</p>
        </div>
      </div>


    </section>

    {/*About Me Section */}
    <section style={{ 
      backgroundColor: "#A72C2C", 
      height: "100vh", 
      width : "100%",
      }}
    >
      <div className="section-width-container" style={{ maxWidth: "980px", margin: "0 auto", padding: "0 5vw" }}>
        <SectionHeader>About</SectionHeader>
        <p style={{ fontFamily: "Rajdhani", fontSize: "2em", fontWeight: "600", color: "white", letterSpacing: "0.1em", lineHeight: "160%", marginTop: "2rem"}}>
          I specialize in making Javascript Apps on the Front-End, Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Lorem mattis rhoncus dictum pulvinar. 
          Egestas volutpat tempor massa pellentesque ornare proin sed vehicula. 
          Id at volutpat laoreet amet varius id. Tortor sodales faucibus sit netus.
        </p>
      </div>
    </section>

    

    {/*Projects Section*/}
    <section style={{ 
      height: "100vh",
      width: "100%",
      backgroundColor: "#050505"
    }}>
    </section>

    {/*Contact Me Section*/}
    <section style={{ backgroundColor: "#FEE400", height: "100vh", width: "100%" }}></section>

    {/*Footer Section*/}
    <footer style={{ backgroundColor: "#050505", minHeight: "20vh"}}></footer>

  </div>

)

export default IndexPage
