import React from 'react'
import { Button } from './Button'
import '../App.css';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>Welcome To PICT</h1>
            <p>Let's Start the Journey</p>
            <div className="hero.btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Login</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Register<i className='far fa-play-circle'></i></Button>
            </div>

        </div>
    )
}

export default HeroSection
