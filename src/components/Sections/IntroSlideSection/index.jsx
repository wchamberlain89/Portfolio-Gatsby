import React from 'react';
import Triangle from './../../../assets/svg/Triangle.svg';
import { relative } from 'path';

export default () => {
  return (
    <div>

      <div style={{ backgroundColor: "#050505", display: "flex", paddingBottom: "15vh", width: "100%" }}>
        
        <div style={{ width: "50%", height: "100vh", position: "sticky", top: "5vh", paddingLeft: "2rem" }}>
          <div style={{ padding: "1.5rem 1.5rem", backgroundColor: "#050505", display: "flex", justifyContent: "center", alignItems: "center", height: "90%" }}>
              <div style={{ margin: "0 auto", border: "5px solid #FEE400", display: "flex", alignItems: "center", padding: "2rem 2rem", height: "auto" }}>
                <p style={{ fontFamily: "Rajdhani", fontSize: "1.5rem", color: "#FEE400", lineHeight: "125%" }}>
                  Hi there! my name is Ward and I’m a Front-End Developer Located in Portland, Or
                </p>
              </div>
          </div>
        </div>


        {/*Left Black Slide */}
        {/*//////////// Original Code ///////////////
        
        <div style={{ height: "100vh", width: "calc(50% - 4rem)", display: "flex", alignItems: "center", justifyContent: "center", position: "sticky", top: "0", padding: "0 2rem"}}>
          <div style={{ padding: "0 2rem", backgroundColor: "#050505", display: "flex", justifyContent: "center", alignItems: "center", height: "90%" }}>
            <div style={{ margin: "0 auto", border: "5px solid #FEE400", display: "flex", alignItems: "center", padding: "2rem 2rem", height: "inherits" }}>
              <p style={{ fontFamily: "Rajdhani", fontSize: "3rem", color: "#FEE400", lineHeight: "125%" }}>
                Hi there! my name is Ward and I’m a Front-End Developer Located in Portland, Or
              </p>
            </div>
          </div>
        </div>

        */}
        
        {/* Right Red Slide */}
        <div style={{ width: "calc(50% - 8em)", backgroundColor: "#050505", padding: "100vh 4em 0 4em" }}>
          <div style={{ height: "100vh", display: "flex", alignItems: "center", position: "sticky", top: "0" }}>
            <p style={{ fontSize: "2rem", color: "white", fontFamily: "Rajdhani", lineHeight: "150%", fontWeight: "800" }}>I HAVE A PASSION FOR  MEANINGFUL MOTION, INTERACTIVITY, AND BRINGING  BEAUTIFUL UI / UX DESIGNS TO LIFE</p>
          </div>
        </div>


      </div>

       
    </div>
  )
}