import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HomeSection.css';
import video from '../videos/video-1.mp4';
function HomeSection() {
    return (
        <div className='home-container'>
            <video src={video} autoPlay loop muted />
            <h1>Bendecidos realizando lo que amamos</h1>
            <p>¿Qué esperas para realizar tu cita?</p>
            <div className='home-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' path='./Services'>FOTOS</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' onClick={console.log('hey')}>Realiza tu cita ya!!!<i className='far fa-play-circle' /></Button>
            </div>
        </div>
    );
}
export default HomeSection;