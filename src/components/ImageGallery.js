import React from 'react';
import styled from 'styled-components';
import anime from '../assets/ImageGalleryImg/Anime.jpg';
import edm from '../assets/ImageGalleryImg/edm.jpg';
import genshin from '../assets/ImageGalleryImg/genshin.jpg';
import kdrama from '../assets/ImageGalleryImg/kdrama.jpg';
import kpop from '../assets/ImageGalleryImg/Kpop.jpeg';
import pixel from '../assets/ImageGalleryImg/pixel.jpg';
import solar from '../assets/ImageGalleryImg/solar.jpg';

const HexStyles = styled.div`
  .tewheading {
    font-size: 50px;
    padding: 50px 0px 150px 0px;
    text-align: center;
    color: var(--white);
  }
  .services-section {
    background-color: var(--dark-bg);
    width: 100vw;
    height: auto;
    min-height: 100vh;
    padding-bottom: 8rem;
  }
  .services-heading {
    color: var(--white);
    text-align: center;
    margin-bottom: 2rem;
    padding-top: 3rem;
  }
  .services {
    display: flex;
    border: 2px solid var(--gray-1);
    padding: 50px 10px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    transform: translateY (80px);
    background-color: var(--dark-bg);
    height: auto;
  }
  .services-cell {
    flex: 0 1 250px;
    max-width: 250px;
    height: 275px;
    margin: 2px;
    position: relative;
    text-align: center;
    z-index: 1;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.8);
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    cursor: pointer;
  }
  .services-cell_img {
    object-fit: cover;
    object-position: center;
    z-index: -1;
  }
  .services-cell_text {
    font-family: 'Montserrat SemiBold';
    font-size: 4rem;
    color: var(--gray-1);
    line-height: 1.3em;
    height: 100%;
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: 400;
    z-index: 1;
  }
  .services-cell::before,
  .services-cell::after,
  .services-cell_img {
    top: -50%;
    width: 100%;
    height: 200%;
    display: block;
    position: absolute;
    clip-path: polygon (50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    z-index: -1;
  }
  .services-cell:hover {
    opacity: 1;
    transition: all 0.3s ease-in-out;
    transform: scale(1.2);
    z-index: 99;
    overflow: hidden;
  }
  services-cell:before {
    content: '';
    position: absolute;
    opacity: 0.4;
    width: 350px;
    height: 70px;
    background: var(--white);
    top: 50;
    left: 0;
    z-index: 1;
    transform: rotate(45deg);
    transition: transform 1.5s;
  }

  .services-cell:hover:before {
    transform: translate(-100px, 600%) rotate(45deg);
    transform: translate 0.5s;
  }
`;

export default function ImageGallery() {
  return (
    <HexStyles>
      <h1 className="tewheading">Some things that make tewari TEWARI:</h1>
      <div className="services">
        <div className="services-cell">
          <img src={anime} alt="" className="services-cell_img" />
          <div className="services-cell_text">Anime</div>
        </div>
        <div className="services-cell">
          <img src={edm} alt="" className="services-cell_img" />
          <div className="services-cell_text">EDM</div>
        </div>
        <div className="services-cell">
          <img src={genshin} alt="" className="services-cell_img" />
          <div className="services-cell_text">Gaming</div>
        </div>
        <div className="services-cell">
          <img src={kdrama} alt="" className="services-cell_img" />
          <div className="services-cell_text">Kdrama</div>
        </div>
        <div className="services-cell">
          <img src={kpop} alt="" className="services-cell_img" />
          <div className="services-cell_text">Kpop</div>
        </div>
        <div className="services-cell">
          <img src={pixel} alt="" className="services-cell_img" />
          <div className="services-cell_text">Hentai</div>
        </div>
        <div className="services-cell">
          <img src={solar} alt="" className="services-cell_img" />
          <div className="services-cell_text">Solar</div>
        </div>
      </div>
    </HexStyles>
  );
}
