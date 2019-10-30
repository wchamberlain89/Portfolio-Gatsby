import React from "react"
require("typeface-rajdhani")

const IndexPage = () => (


  <div style={{ backgroundColor: "#050505" }}>

    {/*Main Intro Section*/}
    <section style={{ 
      height: "100vh", 
      width: "100vw", 
      backgroundColor: "#FEE400" }}>
      

      {/*Title Text */}
      <div>
        <h1 style={{ 
          fontFamily: "Rajdhani", 
          fontSize: "6rem", 
          fontWeight: "bold",
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
