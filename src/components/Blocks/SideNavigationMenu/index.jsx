import React from 'react';

export default () => {
  return (
    <nav style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
      <button style={{ fontFamily: "Rajdhani", fontSize: "1.5em", letterSpacing: "0.1em", fontWeight: "600", padding: "1.75em 0", color: "#000" }}>About</button>
      <button style={{ fontFamily: "Rajdhani", fontSize: "1.5em", letterSpacing: "0.1em", fontWeight: "600", padding: "1.75em 0", color: "#000" }}>Projects</button>
      <button style={{ fontFamily: "Rajdhani", fontSize: "1.5em", letterSpacing: "0.1em", fontWeight: "600", padding: "1.75em 0", color: "#000" }}>Contact</button>
    </nav>
  )
}