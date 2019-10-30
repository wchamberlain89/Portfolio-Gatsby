import React from "react"
import DownArrow from "../assets/svg/downArrow.svg"

require("typeface-rajdhani")

const IndexPage = () => (


  <div style={{ backgroundColor: "#050505" }}>

    {/*Main Intro Section*/}
    <section style={{ 
      height: "100vh", 
      width: "100vw", 
      backgroundColor: "#FEE400"
      }}>
      <div className="section-container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5vw", position: "relative", top: "50%", transform: "translateY(-50%)" }}>
        
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
    <section style={{backgroundColor: "#050505", display: "flex"}}>
      <div style={{ height: "100vh", width: "50vw", backgroundColor: "#050505", position: "sticky", "top": 0 }}>

      </div>
      <div style={{ height: "100vh", width: "50vw", backgroundColor: "#A72C2C", paddingTop: "50vh" }}>
        
      </div>
    </section>

    {/*About Me Section */}
    <section style={{ 
      backgroundColor: "#A72C2C", 
      height: "100vh", 
      width : "100vw" }}>
    </section>

    {/*Triangle Border Shape*/}
    <div style={{ 
      borderLeft: "20vw solid transparent", 
      borderTop: "5rem solid #A72C2C", 
      borderRight: "80vw solid transparent" }}>
    </div>

    {/*Projects Section*/}
    <section style={{ 
      height: "100vh",
      width: "100vw",
      backgroundColor: "#050505"
    }}>
    </section>

    {/*Contact Me Section*/}
    <section style={{ backgroundColor: "#FEE400", height: "100vh", width: "100vw" }}></section>

    {/*Footer Section*/}
    <footer style={{ backgroundColor: "#050505", minHeight: "20vh"}}></footer>

  </div>

)

export default IndexPage
