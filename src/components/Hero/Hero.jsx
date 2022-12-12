import React from 'react';
import './Hero.scss';
import heroSrc from '../../assets/hero.png';

function Hero() {
  return (
    <>
      <div id='carouselExampleIndicators' className='carousel slide' data-bs-ride='true'>
        <div class='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='0'
            class='active'
            aria-current='true'
            aria-label='Slide 1'></button>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='1'
            aria-label='Slide 2'></button>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='2'
            aria-label='Slide 3'></button>
        </div>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img src={heroSrc} className='d-block w-100' alt='' />
            <div className='carousel-contents'>
              <div className='carousel-content col-7 flex-column fs-6'>
                Gameplus ile ayrıcalıklı GeForce Now deneyimine hoşgeldin!
                <p className=''>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor augue vel porta ullamcorper.
                </p>
                <button className='btn px-4 py-2 bg-danger'>REGISTER</button>
              </div>
            </div>
          </div>
          <div className='carousel-item'>
            <img src={heroSrc} className='d-block w-100' alt='' />
            <div className='carousel-contents'>
              <div className='carousel-content col-4'>
                Gameplus ile ayrıcalıklı GeForce Now deneyimine hoşgeldin!
                <p className=''>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor augue vel porta ullamcorper.
                </p>
                <button className='btn px-4 py-2 bg-danger'>REGISTER</button>
              </div>
            </div>
          </div>
          <div className='carousel-item'>
            <img src={heroSrc} className='d-block w-100' alt='' />
            <div className='carousel-contents'>
              <div className='carousel-content col-4'>
                Gameplus ile ayrıcalıklı GeForce Now deneyimine hoşgeldin!
                <p className=''>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor augue vel porta ullamcorper.
                </p>
                <button className='btn px-4 py-2 bg-danger'>REGISTER</button>
              </div>
            </div>
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide='prev'>
          <span className='carousel-control-prev-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide='next'>
          <span className='carousel-control-next-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </>
  );
}

export default Hero;
