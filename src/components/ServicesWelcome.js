import React from 'react';
import '../App.css';
import { Button } from './Button';
import serviceswelcomebg from '../img/img-home.jpg';
import './ServicesWelcome.css';

function ServicesWelcome() {
  return (
    <div className='hero-container1' style={ {backgroundImage:`url(${serviceswelcomebg})` }}>
      <h1>Our Services</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default ServicesWelcome;