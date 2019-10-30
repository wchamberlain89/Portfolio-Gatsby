import React from "react"

const IndexPage = () => (

  <div style={{ backgroundColor: "#050505" }}>

    {/*Main Intro Section*/}
    <section>
      <div style={{ 
        height: "100vh", 
        width: "100vw", 
        backgroundColor: "#FEE400" }}>

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
      borderLeft: "30vw solid transparent", 
      borderTop: "5rem solid #A72C2C", 
      borderRight: "70vw solid transparent" }}>
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
