import React from 'react';
import SkillIcon from '../../Bits/SkillIcon';
import gatsbyIcon from './../../../images/gatsby.png';

export const dummyData = [
  {
    title : "Gatsby",
    src : gatsbyIcon
  },
  {
    title : "Gatsby",
    src : gatsbyIcon
  },
  {
    title : "Gatsby",
    src : gatsbyIcon
  },
  {
    title : "Gatsby",
    src : gatsbyIcon
  },
  {
    title : "Gatsby",
    src : gatsbyIcon
  },
  {
    title : "Gatsby",
    src : gatsbyIcon
  },
  {
    title : "Gatsby",
    src : gatsbyIcon
  },
  {
    title : "Gatsby",
    src : gatsbyIcon
  },
  {
    title : "Gatsby",
    src : gatsbyIcon
  },
  {
    title : "Gatsby",
    src : gatsbyIcon
  },
  {
    title : "Gatsby",
    src : gatsbyIcon
  }
]

export default () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", paddingBottom: "4rem" }}>
      {
        dummyData.map( ( item, index ) => <SkillIcon {...item} />
        
        )
      }
    </div>
  )
}

