import React from 'react';
import './Features.css';

function Features() {
  return (
    <>
      <div className='container px-4 py-3 bg-black '>
        <div className='row row-cols-1 row-cols-md-2 align-items-center justify-content-center align-items-md-center g-5 py-3 px-2 '>
          <div className='d-flex flex-column align-items-center justify-content-center gap-2 text-white'>
            <h3 className='fw-bold '>Features</h3>
            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className='row row-cols-1 row-cols-sm-2 g-4'>
            <div className='d-flex'>
              <div className='d-flex align-items-center justify-content-center flex-row gap-2'>
                <img
                  className='d-inline'
                  src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/F25D4AEE-2A07-43CE-BD1C-9D71B8010C50.svg'
                  alt=''
                />
                <span className='text-white'>Lorem ipsum dolor sit amet</span>
              </div>
            </div>
            <div className='d-flex gap-2'>
              <div className='d-flex align-items-center justify-content-center flex-row gap-2'>
                <img
                  src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/AB8B1F2A-57CD-4015-BB22-8526E4F2329F.svg'
                  alt=''
                />
                <span className='text-white'>Lorem ipsum dolor sit amet</span>
              </div>
            </div>
            <div className='d-flex gap-2'>
              <div className='d-flex align-items-center justify-content-center flex-row gap-2'>
                <img
                  src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/CF5B0337-5AD2-4DED-93F7-1D0D4F1F431B.svg'
                  alt=''
                />
                <span className='text-white'>Lorem ipsum dolor sit amet</span>
              </div>
            </div>
            <div className='d-flex gap-2'>
              <div className='d-flex align-items-center justify-content-center flex-row gap-2'>
                <img
                  src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/B7FE2104-BA05-4ECD-9E70-8A65C9FDB158.svg'
                  alt=''
                />
                <span className='text-white'>Lorem ipsum dolor sit amet</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
