import React from "react"
import styled from "styled-components"
import Head from 'next/head'
import { BottomLine } from "../components/finale"

const linkset = [
  { "class":"cm", "link":"//cruzat.media", "label": "Cruzat.Media" },
  {	"class":"eencee", 		"link":"//eencee.me", 					"label":"Ellsworth & Cruzat"	},
  {	"class":"coffeewith", 	"link":"//coffeewith.thecruzat.com", 	"label":"Dan's Blog"	},
  {	"class":"builtby", 		"link":"//builtby.thecruzat.com", 		"label":"Dan's Portfolio"	},
  {	"class":"thecruzat", 	"link":"//thecruzat.com",				"label":"Cruzat, The"	},
  // {	"class":"twitter",		"link":"http://twitter.com/_cruzat", 		"label":"@_Cruzat on Twitter"	},
  // {	"class":"insta", 		"link":"", 	"label":"Instagram"	}
];

const E404frame = styled.div`
  min-height: 100vh;
  background: #111;
  .clouds   { display:block;width: 100%;margin:2% auto 5%;  }
  
  p         { padding-left: 0; padding-right: 0; }
  
  .foot     { text-align: center; font-family: sans-serif; background: #000; color: #999; margin: 0; padding: 2rem 0;  }
  
  .bac-gr    { background:#111;min-height:100vh; font-family: 'Press Start 2P';color:#fff; }
  .bac-gr .container  { min-height: 100%; width: calc(100% - 6rem); margin:0 auto; } //  max-width:960px;
  
  ul        { margin: 2rem 0 0; padding: 0; list-style: none;  }
  li + li   { margin-top: 0.6rem; }
  li a:hover,
  li a.sel  { background: #e200da; color: #fff; border: none;text-decoration: none; }
  
  .hi       { color: #e200da; }

  @media (min-width:480px) {
  
  }
  
  @media (min-width:640px) {
   
  } 
  
  @media (max-width:640px) {
    .container {
      padding-left: 0;
      padding-right: 0;
      width: 100%!important;
    }
  }  
`;

const Stage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  .wagon {
    margin: 3vw 0 3vw;
    @media (max-width:640px) {
      margin-top: 6rem;
    } 
  }
  
  .fort {
    margin-top: 40vh;;
  
    @media (max-width:640px) {
      // margin-top: 24rem;
    } 
  }
`;

const GreenBand = styled.div`
  background: #31ff32;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.4rem;
  
  
  
  @media (max-width:640px) {
   padding: 2.4rem 0;
  } 
`;

const Footr = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  font-size: 1.8vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;
  
  display: none;
  
  @media (max-width:640px) {
    font-size: 14px;
  }  
`;

const Bubl = "assets/404/404-box.png";

const BubbleBoxFrame = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  width: 40vw;
  // height: 400px;
  // background: url(${Bubl}) 50% 50% no-repeat;
  position: relative;
  font-size: 14px;
  margin: 0 auto;
  text-align: left;
    max-width: 540px;
  
  @media (max-width:1280px) {
    width: 50vw;
  }  
  
  @media (max-width:990px) {
    width: 70vw;
  }  
  
  @media (max-width:640px) {
    width: 100%;
  }  
  
  div {
    position: relative;
    z-index: 2;
    padding: 36px 48px;
  }
  
  p {
    text-align: left;
  }
  
  b {
    position: absolute;
    z-index: 1;
    display: block;
    background: url(${Bubl}) 50% 50% no-repeat;
    
    &.bg {
      top: 24px; left: 24px; right: 24px; bottom: 24px;
    }
    
    &.corn {
      width: 24px;
      height: 24px;
      
      &.tl {
        top: 0; left: 0; background-position: 0 0;
      }
      &.tr {
        top: 0; right: 0; background-position: 100% 0;
      }
      &.bl {
        bottom: 0; left: 0; background-position: 0 100%;
      }
      &.br {
        bottom: 0; right: 0; background-position: 100% 100%;
      }
    }
    &.vert {
      width: 24px;
      top: 24px;
      bottom: 24px;
      &.l {
        left: 0; background-position: 0 50%;
      }
      &.r {
        right: 0; background-position: 100% 50%;
      }
    }
    &.horz {
      height: 24px;
      left: 24px; right: 24px;
      &.t {
        top: 0; background-position: 50% 0;
      }
      &.b {
        bottom: 0; background-position: 50% 100%;
      }
    }
  }
`;

const BubbleBox = ({ children }) => {
  return (
    <BubbleBoxFrame>
      <b className="horz t" />
      <b className="corn tr" />
      <b className="vert r" />
      <b className="corn br" />
      <b className="horz b" />
      <b className="corn bl" />
      <b className="vert l" />
      <b className="corn tl" />
      <b className="bg" />
      <div>{children}</div>
    </BubbleBoxFrame>
  )
};

/**/

const Error404 = () => {
  /*
      const [key, setKey] = useState({ value: null, code: null })

      const handleKey = (e) => {
        setKey({ value: e.key, code: e.keyCode })
        console.log(key);
      }

      useEffect(() => {
        // window.addEventListener("keyup", handleKey);
      }, [handleKey]); */
    /*
  if(document!==undefined) {
    const sett = document.getElementsByTagName("a");
    const getRan = () => {
      const i = linkset.length - 1;
      return Math.floor(Math.random() * (i + 1));
    }
    const checkKeyTriggers = [
      32,
      65,
      66,
      67,
      68,
      69
    ]
    const checkKey = (e) => {
      let it = "";
      console.log(e);
      switch(e) {
        case 32 :
          it = sett[getRan()];
          break;
        case 65 :
          it = sett[0];
          break;
        case 66 :
          it = sett[1];
          break;
        case 67 :
          it = sett[2];
          break;
        case 68 :
          it = sett[3];
          break;
        case 69 :
          it = sett[4];
          break;
        default :
          it = sett[getRan()];
      }
      it.classList.add("sel");
      it.click();
    }

    document.addEventListener('keydown', function (event) {
      if(checkKeyTriggers.includes(event.keyCode)) {
        checkKey(event.keyCode);
      }
    });

  }*/

  return (
    <E404frame>
      <Head>
        <title>The Cruzat : Human Doing Things On Earth</title>
        <meta name="description" content="Dan Cruzat is a freelance web developer/designer and general no-goodnick living in Portland OR. He is crazy good at Tetris." />
        <link href='//fonts.googleapis.com/css?family=Press+Start+2P' rel='stylesheet' type='text/css' />
        <link href='//stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet' type='text/css' />

      </Head>

      <div className="bac-gr">
        <div className="container">
            <img src={"assets/404/404-clouds.png"} alt="" className="clouds" />
            <Stage>
              <img src={"assets/404/404-wagon-walking.gif"} alt="" className="wagon" />
              <BubbleBox>
                <p>damn the dumpster fire</p>
                <p>WASH YOUR HANDS</p>
                <p>you will be okay</p>
              </BubbleBox>
              <img src={"assets/404/404-fort.png"} alt="" className="fort" />
            </Stage>

            <GreenBand>
              <BubbleBox>
                <p>You have arrived at <span className="hi">404</span>.<br />
                  Not... Quite... There...<br />
                  Would you like to look around?</p>
                  <ul id="links">
                    { linkset.map((link, k) =>
                      <li key={k}><a target="_blank" rel="noreferrer" href={link.link}>{link.label}</a></li>
                    ) }
                  </ul>
              </BubbleBox>
            </GreenBand>
        </div>
        <Footr>Press SPACE BAR to continue</Footr>
        <BottomLine />
      </div>
    </E404frame>
  )
}

export default Error404;
