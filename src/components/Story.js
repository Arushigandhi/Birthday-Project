import React from 'react';
import styled from 'styled-components';
import OnTewBed from '../assets/images/OnTewBed.jpeg';

const AboutSectionStyles = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left {
    margin: 0em auto auto auto;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutImg {
    max-width: 425px;
    border: 2px solid var(--gray-1);
    padding: 25px;
  }
  .story__p {
    max-width: 800px;
    margin: 0 25px;
    font-size: 1.8rem;
    line-height: 1.3em;
    text-align: justify;
  }
`;

const HeroStyles = styled.div`
padding: 0 0 0 25px;
  .hero__heading {
    font-size: 3rem;
    margin-top: 0rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: 'Montserrat SemiBold';
      font-size: 8rem;
      color: var(--white);
      padding: 0 0 25px 0px;
    }
  }

  }
`;

export default function Story() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="aboutSection__left">
          <HeroStyles>
            <h1 className="hero__heading">
              <span>The Iconic Story of</span>
              <span className="hero__name">Peaches</span>
            </h1>
          </HeroStyles>
          <p className="story__p">
            After years and years of having fake friends and fake bitches, all
            unappreciative of the absolute aakhon ka tara and that ass in those
            black pants that comes in the over-gori package called Tewari, she
            finally found some people. Now these people who all thought way too
            highly of themselves united in the mutual hatred of a certain March
            Pisces (Rupika gandhi is feb pisces don't worry your milf is safe,
            Nupur aunty howeverrrrrrrrrrrrrrrr my oh myyyy). One fated day, post
            midterm, at the big chill cafe for which Arushi Gandhi is too broke
            and still thanks Vineet Gupta for the cash money that funded her ice
            cream, they became DMG's elite sub-group Peaches. A few more
            subgroups were made in which tewari's bitching did certainly take
            place but we don't need to tell her that, some tiktok lovin, some
            kpop loving, some anime lovin, some hentai lovin, some sexuality
            explorin, some pussy eatin (you wish) and now here we are. All
            separated, in different cities but with more love and lust for each
            other than ever ly tewari sm sm imma cry if i write more of this for
            now good 4 u you're happy and healthy but not me if you ever cared
            to ask.
          </p>
        </div>
        <div className="aboutSection__right">
          <img className="aboutImg" src={OnTewBed} alt="Img" />
        </div>
      </div>
    </AboutSectionStyles>
  );
}
