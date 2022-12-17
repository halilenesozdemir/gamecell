import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <>
      <footer className='bg-white py-2 py-lg-3'>
        <div className='row d-flex flex-column align-items-center  flex-sm-row text-center m-0 '>
          <div className='col-8 d-flex flex-column  flex-sm-row   justify-content-center align-items-center p-0  '>
            <div className='col-3 '>
              <ul className='list-unstyled  d-flex flex-column m-0'>
                <a href='#'>Games </a>
                <a href='#'>Membership</a>
                <a href='#'>Download</a>
              </ul>
            </div>
            <div className='col-2'>
              <ul className='list-unstyled  d-flex flex-column  m-0 '>
                <a href='#'>Contact Us</a>
                <a href='#'>Blog</a>
              </ul>
            </div>
            <div className='col-2'>
              <ul className='list-unstyled  d-flex flex-column mb-2'>
                <a href='#'>FAQs</a>
                <a href='#'>Service Status</a>
              </ul>
            </div>
          </div>
          <div className='col-4 flex-column d-flex  flex-sm-row  justify-content-center align-items-center'>
            <div className='col'>
              <ul className='list-unstyled  d-flex flex-column'>
                <a href='#' className='fw-bold'>
                  Follow Us!
                </a>
                <div className='d-flex mx-auto gap-2'>
                  <a href='#'>
                    <img src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/9B563812-1778-49C2-A78A-29E6DAE45954.svg'></img>
                  </a>
                  <a href='#'>
                    <img src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/DA18F360-65C4-4613-8306-E37C0920498B.svg'></img>
                  </a>
                  <a href='#'>
                    <img src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/BD4D567A-FF56-47AC-B573-702388E59EDA.svg'></img>
                  </a>
                  <a href='#'>
                    <img src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/C4F608BE-8375-439B-AD8A-BB1E992E6463.svg'></img>
                  </a>
                </div>
              </ul>
            </div>
            <div className='col '>
              <p className='m-0'>Site Language</p>
              <div class='dropdown '>
                <a class='btn dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                  English
                </a>
                <ul class='dropdown-menu '>
                  <a class='dropdown-item' href='#'>
                    English
                  </a>
                  <a class='dropdown-item' href='#'>
                    Turkish
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* FOOTER 2 */}
      <div className='container-fluid bg-black px-lg-5 py-3 '>
        <div className='row d-flex flex-column flex-sm-row justify-content-center align-items-center text-center  '>
          <div className='col d-flex flex-column flex-sm-row gap-lg-3 mb-2 align-items-center    '>
            <p className='text-white m-0'>Terms of Use</p>
            <p className='text-white m-0'>Privacy Policy</p>
            <p className='text-white m-0'>Cookies</p>
          </div>
          <div className='col  d-flex flex-column flex-sm-row justify-content-end align-items-star'>
            <p className='text-white text-muted m-0'>Tüm Hakları Saklıdır.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
