// import React from "react";
import styled from "styled-components"

export const edges = {
  small: "42px",
  medium: "68px",
  large: "84px",
}

export const Center = styled.div`
  &, * {
    text-align: center;
  }
`;

export const Headline = styled.div`
  font-weight: normal;
  text-align: center;
  padding: 12px 0;
  margin: 10vw auto 1.4rem;
  text-transform: uppercase;
  font-size: 1.2em;
  font-family: "Rock Salt", cursive;
  color: var(--gold);
`;

export const ContentFrame = styled.div`
  position:fixed;
  z-index:2;
  top:${edges.medium};
  bottom:${edges.small};
  left:0;
  right:0;
  overflow:auto;
  box-shadow:inset 0 0 140px #121212, inset 0 0 100px #121212, 0 0 120px #000;
  border:1px solid #444;
  font-size: 1.6rem;;
  @media (min-width: 768px) {
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
      border-radius: 8px; // 0.8rem;
    }
  }
`;

export const ContentWrap = styled.div`

`;

export const Motto = styled.div`
  font-size: 6vw; // 200%;
  padding-top: 52px;
  font-weight: 900;
  color: rgba(255,255,255,0.6); // var(--goldOn);
  opacity: 0.6;
  display: flex;
  height: 56vh;
  align-items: center;
  justify-content: center;
  max-width: 60vw;
  margin: 0 auto;
`;
