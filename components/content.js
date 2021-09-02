import React, {useState} from "react"
import styled from "styled-components"
import {Headline, Center} from "../components/layout";
import Finale from "../components/finale"

const Content = () => {

  return (
    <div className="contain">

      <p>I'm Dan Cruzat, a digital creative and business owner in Portland OR. My primary disciplines are front end web development and audio engineering. I like to build.</p>
      <p>Since 2012, I have been the development half of <a href="http://eencee.me" target="_blank" rel="noreferrer" title="check out Ellsworth + Cruzat">E+C</a>, honored colleague &amp; fellow independent Christine Ellsworth is the design side. In 2018, I founded <a href="http://cruzat.media" target="_blank" rel="noreferrer" title="Cruzat.Media // Interactive &amp; Sound">Cruzat.Media</a> to begin a new stage marrying interactive and audio services. I am always open to a conversation.</p>
      <p>I try to remember a life beyond work, to feed the creative drives, to keep all planets in my system in harmonious orbit.</p>

      <Headline>* * brief * *</Headline>

      <p>I was born born on Jupiter, but I am "from" Chicago, I've been in Portland since late 2006. {/*I spent my adolescent years in Evanston IL, also responsible for the Pivens, the Cusacks, Donald Rumsfeld and Charleston Heston (Evanston WHAT). Chicago is a very large city with a lot of aggression and corruption, Portland is a smaller city with a youthful and flighty personality. Environment is an inevitable factor in character.*/}</p>
      <p>Lots of things have changed...</p>
      <p>In former lives, I've been a prankster in life insurance, a most loathesome breed of telemarketer, a binder of books, a jockey of cd/dvd replication, a walker of dogs (and scooper of poops), an animator of Flash (and looper of loops), a pusher of vacuums, lawnmowers and vitamin supplements, and as a Distinguished Fellow of Assemblies with the <a href="http://www.johnhardyco.com/" title="visit the John Hardy Company, maker of the world's finest digital microphone pre-amplifier" target="_blank" rel="noreferrer">John Hardy Company of Evanston IL</a>, maker of the world's finest digital microphone pre-amplifier, the JHC-M1.</p>
      <p>Let's start there.</p>

      <Headline>* * heroes * *</Headline>

      <p>John Hardy has a post-it in his office that reads "The Amazing Autodidact". He taught me about being self-taught, how to learn what you need to know as you go. He built a globally recognized audio processing brand from his childhood home in Evanston. He is still active in the community and a fixture at cafes.{/*is a different kind of animal. Autodidacts are those who can self-teach in the true sense of the word, meaning doing the necessary research and self-directed learning that is actually effective to gaining understanding, practical application and real-world result. People have it to various degrees, but John might be the strongest damn self-Shaolin I have ever met. He came up off studio engineer work and equipment repair, learned electronics to a (not obsessive but) strong degree (luv ya J), and built a company that owns its corner of the market. You would hurt people for his client list and his old buddies in the game are legends you embarass yourself on meeting. John remains a solid street level cat in Evanston, still active in business and community. He's still up in them cafes, sippin them lattes...*/ }</p>
      <p>The Heise family of Evanston, gifted writers, owned a bookstore that was my first regular job. Half science fiction and half Chicago gangster history. I cannot imagine a more perfect place for 12 year old me. Also the first time I had any sense of a work ethic. {/*I would also like to acknowledge the Heise family of Evanston IL, for providing me with my first job in the coolest bookstore a twelve year old ever stepped into. Tiger will always be the man, and I would never come at dude with anything but correct change. Kenan Heise is a recognized writer, but also put together a great company that included room for branch business development, resulting in a stylized hybrid reading and browsing space. A mix of Chicago political/gangster history and a museum to all things science fiction, each having appropriate shelves, books and display items (not for sale, please ask before handling). I mostly worked on credit and I still have a ridic library from those days. The shop is now in memory only but remains a cornerstone inspiration.*/}</p>
      <p>Two businesses I worked at in the earliest years that taught lessons I carry with me to this day. You are who you were when you got here. It's okay to be weird, it's okay to stand out. Sometimes in that space of individuation, we find our true communities.</p>
      <p>A star's energy will travel for aeons after its death, its light will continue to fall on remote worlds. I still work and live in the lane those jobs placed me in.</p>

      <Headline>* * crafts * *</Headline>

      <p>I got my first piece of music sampling software in 1992 and quickly became obsessed with collecting little pieces of sound. 96 had me with a 4-track and 98 plugged me in with MIDI. I spent my college years running in the insanity of indie rap in Chicago.</p>
      <p>In the course of my beatmaker / sample-crazy days I went through crates of cassettes, tapes, reels, and thousands upon thousands vinyl records. I've used plenty of hardware over the years, my all time favorite sampler is the Akai MPC 2500. Mine is named Vader.</p>
      <p>Sampling is an odd artform that chose me... At the age of 20, I was introduced to PhotoShop, the same principles I had learned in audio translated to visuals. I repurpose, rearrange, reconfigure and realign. </p>
      <p>I have always loved rap, the intersection of vocalized rhythm and conceptual writing. I'm sure I'll still be embarassing myself with it in my ancient years.</p>
      <p>Writing has always been part of it, a part of me. I have pages from notebooks that are almost 40 years old. Once upon a time, Dave gave me the best advice. </p>

      <Headline>* * maxims * *</Headline>

      <Center>

          <p>never stop writing</p>
          <p>never work against the grain</p>
          <p>don't wait for permission to begin</p>
          <p>reflect well on your people, your family</p>
          <p>you are the person you were when you got here</p>
          <p>when it falls down, we build again</p>
          <p>change is the only constant</p>
          <p>be helpful and kind</p>

      </Center>

      <Headline>* * randos * *</Headline>

      <p>Doctor Who keeps getting better and better. Loving Whitaker but must confess Capaldi is still my favorite of the new batch. In my lifetime I have seen the nerd identity free itself from ridicule and become a badge of honor. Go forth, young lions.</p>
      <p>It is in the nature of things to grow and change. So while hip hop or DW may be very different than it was when I was a kid, so am I, so is the world. I still see the connecting threads to the things that I loved, it's still The Same Thing, Just Modern. Try to accept the changes.</p>
      <p>I am a moderate-to-insanely busy human but <a href="mailto:dan@thecruzat.com?subject=I was at theCruzat.com and all I got was this crap email prompt" title="holler at me joe">would love to hear from you</a>. Be patient if it takes me a little while to get back to you. :D</p>

      <Finale />
    </div>
  )
}

export default Content;
