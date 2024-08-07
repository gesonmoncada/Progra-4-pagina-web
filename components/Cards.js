import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import card1 from './image/1.jpg';
import card2 from './image/8.jpg';
import card3 from './image/3.jpg';
import card4 from './image/7.jpg';
import card5 from './image/5.jpg';
function Cards() {
    return (
        <div className='cards'>
            <h1>Nuestro Repertorio de Servicios de Fotografia</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem src={card1} text='Fotografias Matrimociales' label='Matrimonios' path='gallery/matrimonio' />
                        <CardItem src={card2} text='Fotografias Familiares' label='Familia' path='gallery/familia' />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem src={card3} text='Coches Deportivos' label='Automoviles' path='gallery/coches' />
                        <CardItem src={card4} text='Gastronomia' label='Platillos' path='gallery/gastronomia' />
                        <CardItem src={card5} text='Aventuras' label='Playa' path='gallery/aventura' />
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Cards;