import React from 'react';

import WidthContainer from '../../Bits/WidthContainer';
import SectionHeader from '../../Bits/SectionHeader';
import gatsbyIcon from './../../../assets/images/gatsby.png';

export default () => {
  return (
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
  )
}
