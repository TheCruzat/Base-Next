import React from "react"
import styled from "styled-components"
import { Center, Motto } from "./layout"

const BottomLineFrame = styled.div`
  text-align: center;
`;

export const BottomLine = () => {

    const now = new Date();
    const yr = now.getFullYear();

  return (
    <BottomLineFrame>
      <p className="foot">All Content &copy;2012-{ yr } PD Cruzat.<br />All Rights Reserved.<br /><i className="fa fa-microphone"></i> DBAD <i className="fa fa-microphone"></i></p>
    </BottomLineFrame>

  )
};

const FinaleStyled = styled.div`
  padding: 0 20px;
  p:not(.foot) {
    margin: 0;
    padding: 0;
    
    + p {
      margin-top: 0.8rem;
    }
  }
  blockquote {
    max-width: 360px;
    margin: 15vh auto 0;
    margin-right: auto;
  }
  p.foot {
    margin-top: 12vh; // 61vh;
    text-align: center;
    font-size: 80%;
    color: #aaa;
    margin-bottom: 2rem;
  }
`;

const Attr = styled.div`
  margin: 12px 0;
  p {
    padding: 0;
    margin: 0!important;
    font-size: 1.5rem;
  }
`;

const Flowers = styled.p`
    font-size: 1.8rem;
`;

const Finale = () => {

  return (
    <FinaleStyled>

      <blockquote className="twitter-tweet" data-conversation="none" lang="en">
        <p><a target="_blank" rel="noreferrer" href="https://twitter.com/_Cruzat">@_Cruzat</a> the @ and the _ and the C looks like a stern guy with a monocle.</p>
        <p>Fitting.</p>
        <Attr>
          <p>&mdash; Robin Balmer (@robinbalmer)</p>
          <p><a target="_blank" rel="noreferrer" href="//twitter.com/robinbalmer/status/115216677033095168">September 18, 2011</a></p>
        </Attr>
        <Flowers><span aria-label="flowers" role="img">💐💐💐💐</span></Flowers>
      </blockquote>
      <Center> <Motto>aut viam inveniam aut faciam</Motto></Center>

      <BottomLine />
      {/**/}
    </FinaleStyled>
  )
}

export default Finale;