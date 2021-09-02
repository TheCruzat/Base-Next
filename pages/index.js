import styled from 'styled-components'
import Head from 'next/head'
import Background from "../components/background";
import {ContentFrame, ContentWrap} from "../components/layout";
import Content from "../components/content";
import TopRail from "../components/header";
import BotRail from "../components/footer";
import Greeto from "../components/greeto"
import Finale from "../components/finale"

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const metaName = "Dan Cruzat";

const metaFings = {
  name: metaName,
  url: "https://thecruzat.com",
  title: "The Cruzat : Human Doing Things On Earth",
  description: metaName + " is a web developer, music producer and general digital creative (with wild Tetris skills).",
  image: "./thecruzat-social.png",
  twitter: "@_Cruzat"
}

export default function Home() {
  return (
    <div>
        <Head>
            <title>{ metaFings.title }></title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="{ metaFings.description }" />
            <meta name="keywords" content="Cruzat, Portland, producer, web developer, front end" />
            <meta name="author" content={ metaName } />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content={ metaFings.twitter } />
            <meta name="twitter:creator" content={ metaFings.twitter } />
            <meta name="twitter:title" content={ metaFings.title } />
            <meta name="twitter:description" content={ metaFings.description } />
            <meta name="twitter:image" content={ metaFings.image } />
            <meta name="twitter:image:alt" content={ metaName } />
            <meta property="og:url" content={ metaFings.url } />
            <meta property="og:title" content={ metaFings.title } />
            <meta property="og:site_name" content={ metaFings.title } />
            <meta property="og:description" content={ metaFings.description } />
            <meta property="og:image" content={ metaFings.image } />

            <link rel="icon" type="image/x-icon" href="./assets/samurai.ico" />
            <link href='//fonts.googleapis.com/css?family=Rock+Salt|Roboto+Slab' rel='stylesheet' type='text/css' />
            <link href='//stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet' type='text/css' />
        </Head>
        <TopRail />
        <Background />
        <ContentFrame>
            <Greeto />
            { /*<ContentWrap bg={bg} className="lane">*/ }
            <ContentWrap className="lane">
              <Content />
            </ContentWrap>

        </ContentFrame>
        <BotRail />
    </div>
  )
}
