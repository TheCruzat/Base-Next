import React from "react";
import styled from "styled-components";
// import HelloTag from "../assets/hello.png";

const GreetoFrame = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height:100%;
  text-align:center;
  text-shadow:0 0 6px rgba(0,0,0,0.7);
  color:#fff; /*#d4d3c5;*/
  font-size:5em;
  font-weight:normal;
  margin:0;
  font-family:'Rock Salt';
  line-height:85px;
  /*position:absolute;left:0;top:40px;margin-left:-10px;*/  
  
  img {
    max-width: 90%;
    opacity: 0.5;
    max-height: 90%;
    width: 100%;
    height: 100%;
    object-fit: contain;
    // transition: all 0.6s ease-in;
  
    &:hover {
      // opacity: 0.05;
      // transition: all 2s ease-in;
      // object-fit: cover;
    }
  }
`;

const Greeto = () => {
  return (
    <GreetoFrame>
      <img src='/assets/hello.png' alt="" />
      {/*<HelloTag />*/ }
    </GreetoFrame>
  )
}

export default Greeto;
