import React from 'react';
import BtSliderImg from '../../assets/bt-slider.png';
import './BottomSlider.scss';

function BottomSlider() {
  return (
    <>
      {/* First Carousel */}
      <div id='carouselExampleIndicators' className='carousel slide d-none d-lg-block' data-bs-ride='true'>
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
            <img src={BtSliderImg} className='d-block w-100' alt='' />
            <div className='carousel-contents'>
              <div className='carousel-content col-7 flex-column fs-6'>
                GAMING - AUGUST 11, 2020
                <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus curvus orci et!</p>
                <p className=''>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus orci et ipsum suscipit.
                </p>
                <button className='btn px-4 py-2 bg-danger'>READ MORE</button>
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
      {/* First Carousel Finish */}

      <div id='carouselExampleIndicators' className='carousel slide mb-3' data-bs-ride='true'>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img src={BtSliderImg} className='d-block w-100' alt='' />
          </div>
        </div>
        <div>
          <div className='col flex-column fs-6'>
            GAMING - AUGUST 11, 2020
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus curvus orci et!</p>
            <p className=''>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus orci et ipsum suscipit.
            </p>
            <button className='btn px-4 py-2 bg-danger'>REGISTER</button>
          </div>
        </div>
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
      </div>
    </>
  );
}

export default BottomSlider;
