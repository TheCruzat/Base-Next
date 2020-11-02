import React, {useState} from "react"
import styled from "styled-components"

const links = {
  navv: [
    {
      url: "http://cruzat.media",
      title: "find me at Cruzat.Media",
      label: "c.m",
    },
    {
      url: "http://eencee.me",
      title: "learn about my partnership with freelance Art Director Christine Ellsworth",
      label: "e+c",
    },
    {
      url: "http://builtby.thecruzat.com",
      title: "see my portfolio",
      label: "folio",
    },
    {
      url: "http://coffeewith.thecruzat.com",
      title: "http://coffeewith.thecruzat.com",
      label: "blog",
    },
  ],
  socc: [
    {
      url: "http://cruzat.media",
      title: "find me at Cruzat.Media",
      icon: "fa-briefcase",
    },
    {
      url: "https://codepen.io/DanCruzat",
      title: "school me on CodePen",
      icon: "fa-codepen",
    },
    {
      url: "https://cruzat.bandcamp.com",
      title: "bump me on BandCamp",
      icon: "fa-bandcamp",
    },
    {
      url: "http://twitter.com/_cruzat",
      title: "provoke me on Twitter",
      icon: "fa-twitter",
    },
    {
      url: "https://www.linkedin.com/in/dancruzat",
      title: "take a number on LinkedIn",
      icon: "fa-linkedin",
    },
  ]
};

const BotRailStyles = styled.div`
  position: fixed;
  height: 42px;
  bottom: 0;
  top: auto;
  left: 0;
  right: 0;
  overflow: hidden;
  // border-top: 1px solid #000;
  // background: #000;
  
  .contain {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
    height: 100%;
    @media only screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }
  
  @media only screen and (max-width: 768px) {
    padding-top: 42px;
    background: #2b2b2b;
    border-top: 1px solid #777;
    &[open] {
      background: #0a0a0a;
      transition: all 0.4s;
      padding-top: 56px;
      height: 160px;
      z-index: 10;
      box-shadow: inset 0 20px 40px #2a2a2a;
    }
  } 
  @media only screen and (min-width: 768px) {
    @media only screen and (min-height: 480px) {
      // height: 68px;
    }
    @media only screen and (min-height: 600px) {
      height: 84px;
    }
    @media only screen and  and (min-height: 600px) {
      border: none;
    }
  }
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: inline-flex;
    width: 100%;
    max-width: 240px;
    height: auto
    align-items: center;
    justify-content: space-between;
    
    li a {
      display: block;
      line-height: 24px;
      // margin: 9px 4px;
      // font-size: 1.6rem;
      text-decoration: none;
      text-shadow: none;
      color: var(--gold);
      &:hover {
        color: #eee; // var(--goldOn);
        border: none;
        text-shadow: 0 2px 4px #000;
      }
    }
  }
`;

const NavSet = styled.ul`
  li a {
    text-transform: uppercase;
    font-size: 1.2rem; // 0.6em;
  }
`;

const SocSet = styled.ul`
 margin-top: 1.4rem!important;
 li {
   a {
    width: 24px;
    text-align: center;
    color: var(--gold);
    text-decoration: none;
    border: none;
      font-size: 1.6rem;
   }
 }
  @media only screen and (min-width: 768px) {
    margin-top: 0!important; // 15px;
  } 
  
  @media only screen and (min-height: 600px) {
    li {
      a {
        width: 32px;
        height: 32px;
        line-height: 32px;
        border-radius: 16px;
      }
    }
  }
`;

const MobileMenuTriggerStyled = styled.button`
   background: transparent;
   color: var(--gold);
   outline: none;
   border: none;
   transform: rotate(180deg);
   font-size: 1.4rem;
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
   height: 36px;
   position: absolute;
   top: calc(50% - 18px);
   left: 0;
   z-index:3;
   transition: all 0.4s;
   cursor: pointer;
    @media only screen and (max-width: 767px) { 
      top: calc(50% - 18px);
      
      [open] & {
        top: 0;
      }
    }
    @media only screen and (min-width: 768px) {
      display: none;
    }
    @media only screen and (min-height: 600px) {
      // display: none;
    }
   
   [open] & {
    transform: rotate(0);
    top: 0;
   }
`;

const BotRail = () => {

  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => {
    setMobileOpen(!mobileOpen)
  }

  const MobileMenuTrigger = () => {
    return (
      <MobileMenuTriggerStyled onClick={() => toggleMobile()}>
        <i className="fa fa-caret-down" />
      </MobileMenuTriggerStyled>
    )
  }

  return (

    <BotRailStyles open={mobileOpen}>
      <MobileMenuTrigger />
      <div className="contain">
        <NavSet>
          { links.navv.map((link) =>
            <li>
              <a
                href={link.url}
                title={link.title}
                target="_blank"
                rel="noreferrer">
                {link.label}
              </a>
            </li>
          )}
        </NavSet>
        <SocSet>
          { links.socc.map((link) =>
            <li>
              <a
                href={link.url}
                title={link.title}
                aria-label={link.title}
                target="_blank"
                rel="noreferrer">
                <i className={"fa "+link.icon} />
              </a>
            </li>
          )}
        </SocSet>
      </div>
    </BotRailStyles>
  )
};

export default BotRail;