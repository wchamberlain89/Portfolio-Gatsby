import React from 'react';
import PropTypes from 'prop-types';

const SectionHeader = (props) => {
  return (
    <div style={{ borderBottom: ".2rem solid white" }}>
      <h2 style={{ fontSize: "5rem", color: "white", fontFamily: "Rajdhani", marginBottom: ".5rem", fontWeight: "600" }}>{ props.children }</h2>
    </div>
  )
}

SectionHeader.propTypes = {
  text : PropTypes.string.isRequired
}

export default SectionHeader;