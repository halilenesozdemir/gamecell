import React from 'react';
import './Pricing.scss';

function Pricing({ pricingMock }) {
  return (
    <>
      <div className='container-fluid py-3'>
        <div class='row row-cols-1 row-cols-md-3 mb-3 text-center px-sm-5'>
          {pricingMock.map((data) => {
            return <PricingCard data={data} />;
          })}
        </div>
      </div>
    </>
  );
}

function PricingCard({ data }) {
  return (
    <div>
      <div class='col '>
        <div class='card mb-4 shadow-sm'>
          <div class='card-header py-3'>
            <h4 class='my-0 fw-normal'></h4>
          </div>
          <div class='card-body py-5 '>
            <h2 class='card-title pricing-card-title bg-black'>{data.title}</h2>
            <hr />
            <div className=''>
              <div className='mb-2 d-flex flex-col align-items-center justify-content-center gap-3'>
                <img src={data.src} alt='' />
                <p>{data.opt1}</p>
              </div>
              <div className='mb-2 d-flex flex-col align-items-center justify-content-center gap-3 '>
                <img src={data.src} alt='' />
                <p>{data.opt2}</p>
              </div>
              <div className='mb-2 d-flex flex-col align-items-center justify-content-center gap-3'>
                <img src={data.src} alt='' />
                <p>{data.opt1}</p>
              </div>
              <div className='mb-2 d-flex flex-col align-items-center justify-content-center gap-3'>
                <img src={data.src} alt='' />
                <p>{data.opt2}</p>
              </div>
              {data.button}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
