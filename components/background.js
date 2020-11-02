import React from "react";
// import { graphql } from "gatsby";
import styled from "styled-components"
import {edges} from "./layout"
// import fs from "fs"
const bgIMG = "/assets/bg/the-boys.gif";

/*
// const imag = "/assets/bg/"
// const imgStack = fs.readdirSync$1(imag)//[
//  "the-boys.gif",
//]

export const getIMG = () => {
  const i = imgStack.length - 1;
  const j = Math.floor(Math.random() * (i + 1));
  return imag+imgStack[j];
};*/

const randoPos = () => {
  const a = Math.floor(Math.random() * 100),
        b = Math.floor(Math.random() * 100);
  return a+"% "+b+"%"
}
//  ${ 'url(../assets/bg/'+ props => props.bg +') 50% 25% fixed no-repeat;' };// url('../assets/bg/'+  .bg) 50% 25% fixed no-repeat;
export const BGFrame = styled.div`
  position: fixed;
  top: ${edges.medium}; 
  left: 0; 
  bottom: ${edges.small}; 
  right: 0; 
  background: #000; // url(${props => props.bg}) 50% 25% fixed no-repeat;;
  background-size: cover;
  z-index: -5;
  border-radius: 8px;
  overflow: hidden;
  width: auto;
  height: auto;
  
  // &:after {
  //   display: block;
  //   content: "";
  //   position: absolute;
  //   top: 0;left: 0;right:0; bottom: 0;
  //   background: rgba(0,0,0,0.7)
    
  // }
  
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 100% 50%; // ${randoPos()};
    opacity: 0.3;
  }
  
  @media only screen and (min-width: 768px) {
  
    @media only screen and (min-height: 480px) {
      top: ${edges.medium};
      // bottom: ${edges.medium};
    }
    
    @media only screen and (min-height: 600px) {
      top: ${edges.large};
      bottom: ${edges.large};
    }
    
    @media only screen and (min-height:600px) {
      left:24px;right:24px;
    }
  }
`;

const Background = ({ bg }) => {
  // alert(bg);
  return(
    <BGFrame><img src={bgIMG} alt="" /></BGFrame>
  )
}

export default Background;