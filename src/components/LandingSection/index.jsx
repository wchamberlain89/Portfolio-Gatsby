import React from 'react';
import SideNavigationMenu from './../SideNavigationMenu';
import WidthContainer from './../WidthContainer';


export default () => {
  return (
    <div style={{ 
        height: "100vh", 
        width: "100%", 
        backgroundColor: "#A72C2C"
      }}>
      <WidthContainer style={{ padding: "0 5vw", position: "relative", top: "50%", transform: "translateY(-50%)", width: "100%" }}>
        
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5em" }}>

          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            
            {/*Title Text */}
            <h1 style={{ 
              fontFamily: "Rajdhani", 
              fontSize: "6rem", 
              fontWeight: "800",
              lineHeight: "110%",
              letterSpacing: "0.1em",
              marginBottom: ".15em",
              color: "#000"
            }}>
              <div>Ward</div>
              <div>Chamberlain</div>
            </h1>

            <h3 style={{
              fontFamily: "Rajdhani",
              fontSize: "2.25rem",
              letterSpacing: "0.2em",
              color: "#000"
            }}>
              Front End Developer
            </h3>
          
          </div>
          
        </div>
        
        {/* Arrow Indicator */}
        <div style={{ width: "45px", height: "45px", backgroundColor: "#050505", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="31" height="20" viewBox="0 0 31 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3L15.5 17L28 3" stroke="#A72C2C" stroke-width="2" stroke-linecap="square"/>
          </svg>
        </div>
      </WidthContainer>        
    </div>
  )
}