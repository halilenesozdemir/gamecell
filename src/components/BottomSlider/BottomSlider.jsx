import React from 'react';
import './BottomSlider.scss';

function BottomSlider({ bottomData }) {
  return (
    <>
      <div id='carouselExampleIndicators' className='carousel slide ' data-bs-ride='true'>
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
          {bottomData.map((data) => {
            return <BottomSliderData data={data} />;
          })}
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide='prev'>
          <span>
            <img
              src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/5AF00BE2-757C-4803-AE77-91EB8D57927B.svg'
              alt=''
            />
          </span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide='next'>
          <span>
            <img
              src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/7BF74048-3476-465B-BBD9-9FA664EE2D8F.svg'
              alt=''
            />
          </span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </>
  );
}

function BottomSliderData({ data }) {
  return (
    <div className={`carousel-item ${data.status} `}>
      <div className='container'>
        <div className='row d-flex flex-column flex-sm-row '>
          <div className='col col-sm-4 '>
            <img src={data.src} className='img-fluid ' alt='' />
          </div>
          <div className='col mx-auto col-sm-8 d-flex flex-column justify-content-center align-items-start px-5 '>
            <div className='carousel-content d-flex flex-column text-center mb-3'>
              {data.date}
              <p className=''>{data.title}</p>
              <p className=''>{data.desc}</p>

              {data.button}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomSlider;
