import React from 'react';
import styled from 'styled-components';
import TewImg from '../assets/images/TewImg.jpeg';
import Ptext from './Ptext';
// import './coverpic.css';

// const ImgStyles = styled.div`
//   width: 400px;
//   height: 400px;
//   margin: auto;
// `;
const HeroStyles = styled.div`
  .hero {
    min-height: 900px;
    width: 65%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 2px solid var(--gray-1);
    margin: 100px auto 0px auto;
  }
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
      font-size: 6rem;
      color: var(--white);
      padding: 0 0 0px 0;
    }
  }
  .hero__img {
    max-width: 800px;
    width: 100%;
    height: 600px;
    margin: 10px auto;
  }
`;
export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Happy Birthday</span>
            <span className="hero__name">Ananya Tewari</span>
          </h1>
          <div className="hero__img">
            <img src={TewImg} className="coverpic" alt="" />
          </div>
          <div className="hero__info">
            <Ptext>
              The youngest, hottest, goriest member of Peaches in finally 19! We
              love you so much and wish you have the best fucking year ahead
              meri jaan. We miss you and all your quirks and may your next asian
              obsession bring us all heaps of joy. She a quirky gal! :)
            </Ptext>
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
