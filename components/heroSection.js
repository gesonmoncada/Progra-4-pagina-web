import React from 'react';
import '../App.css';
import { Button } from './Button.css';
import './HeroSection.css';
import video from './videos/video-1.mp4';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={video} autoPlay loop muted />
      <h1>LA AVENTURA EMPIEZA</h1>
      <p>¿Qué esperas para comenzar a viajar?</p>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>INICIEMOS</Button>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' onClick={console.log('hey')}>MIRA TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
