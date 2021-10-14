import React from 'react';
import styled from 'styled-components';
import one from '../assets/ImageGrid/one.jpeg';
import two from '../assets/ImageGrid/two.jpeg';
import three from '../assets/ImageGrid/three.jpeg';
import four from '../assets/ImageGrid/four.jpeg';
import five from '../assets/ImageGrid/five.jpeg';
import six from '../assets/ImageGrid/six.jpeg';
import seven from '../assets/ImageGrid/seven.jpeg';
import Ptext from './Ptext';

const GridStyles1 = styled.div`
  img {
    width: 100%;
    margin: 25px;
    border: 2px solid var(--gray-1);
    padding: 25px;
  }
  .column {
    float: left;
    width: 50%;
    padding: 5px;
  }

  .row::after {
    content: '';
    clear: both;
    display: table;
  }
`;

export default function ImageGrid() {
  return (
    <GridStyles1>
      <div className="row">
        <div className="column">
          <img src={one} alt="" />
        </div>
        <div className="column">
          <img src={two} alt="" />
        </div>
      </div>
      <div className="row">
        <div className="column">
          <img src={five} alt="" />
        </div>
        <div className="column">
          <img src={four} alt="" />
        </div>
      </div>
      <div className="row">
        <div className="column">
          <img src={three} alt="" />
        </div>
        <div className="column">
          <img src={six} alt="" />
        </div>
      </div>
      <img src={seven} alt="" />
      <Ptext>
        Basically, tewari I will be pushing this code to github so please go
        check that out so you can see for yourself how many lines of fucking
        code this tiny website has taken and also im sorry for making it two
        days late, i have a life and a very very healthy relationship to keep up
        with or whatever anywayyyyy can't wait to meet you soon love you you hot
        bitch have a gr9999 year ahead
      </Ptext>
    </GridStyles1>
  );
}
