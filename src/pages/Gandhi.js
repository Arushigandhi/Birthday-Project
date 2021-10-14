import React from 'react';
import styled from 'styled-components';
import OnAruBed from '../assets/images/OnAruBed.jpeg';
import InCrest from '../assets/images/InCrest.jpeg';
import KurtaWow from '../assets/images/kurtawow.jpeg';

const AruText = styled.div`
  max-width: 100%;
  margin: 0;
  font-size: 1.8rem;
  line-height: 1.3em;
  text-align: justify;
  padding: 100px 50px;
  .aboutImg1 {
    max-width: 600px;
    border: 2px solid var(--gray-1);
    padding: 25px;
    display: block;
    margin: 100px auto;
  }
  .aboutImg2 {
    max-width: 600px;
    border: 2px solid var(--gray-1);
    padding: 25px;
    display: block;
    margin: 100px auto;
  }
`;

export default function Gandhi() {
  return (
    <div>
      <AruText>
        Hi tewari <br />
        meri jaan, the amount i care for you and worry about you and constantly
        talk to my friends (all fake ofc) about my neet friend, itna khud pe
        dhyaan deti toh maybe engineer actually ban pati. anywayyy i love you
        bro and i miss you so so much. i know it's like cliche to be like the
        first day i met you there was a spark, but there really was. it wasn't
        that way with anyone else in dmg or peaches for that metter. vedu was
        (is) a big whore and ss were idk too out of my league. but maam talking
        to you about some comic thing, gosh we are such nerds, it just clicked.
        it made sense to me. i have related to you on the mumbai background
        thing (even if you were like 4 when you left lmao)and the college scene
        in India thing and the being very hot and having great physical
        commodities thing (congrats on c cup). idk man being friends with you
        makes so much sense to me and loving you does too (this is too cheesy).
        it was like i know we'll always be there. physically too. kitna hi duur
        tha crest from belmonte. even now, others might be in different
        countries but we're sath sath. mannnnn i don't believe in god but i
        prayed for you to go to college somewhere close to me everyday. ily ily.
        have a great year. i like knowww your life really truly starts this year
        so your birthday really marks something crazzzzy. you're going to grow
        up to be the most graceful and prettiest with hottest cheekbones doctor
        ever which even a mask wont be able to hide the beauty of (DOTS
        reference whooo). lets colaborate on a research project okay biotech for
        the win leggo. lets have the best time in jaipur in december and get
        drunk and makeout. i hope to give you blowjob tips soon someday(ya
        totally cause im a pro now or whateverrr) or you know i can demonstrate
        it to you in person on your pussay (or your mom's too whatever works ok
        this is officially too weird) and omg yes maam literally made a whole
        website for you and put in the HOURSSS, apprecaite me (in kind) ilyyy
        <img className="aboutImg1" src={OnAruBed} alt="" />
        <img className="aboutImg2" src={InCrest} alt="" />
        <img className="aboutImg2" src={KurtaWow} alt="" />
        <br />
        <br />
        LOVE YOUUUUUUU ❣️❣️❣️❣️❣️❣️
      </AruText>
    </div>
  );
}
