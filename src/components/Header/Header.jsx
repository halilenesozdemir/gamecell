import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-white py-3 '>
        <div className='container px-lg-5 px-2 ms-2 '>
          <Link className='navbar-brand ms-lg-3' to='/'>
            <img
              className='logo-img'
              src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/05D02D0F-C436-4842-9A6E-56C4D0D077D8.png'
              alt=''
            />
          </Link>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#gameplusNavbar'>
            <span>
              <img
                src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/10D39C65-7309-4B26-A9CD-F37EC7EA5FE2.svg'
                alt=''
              />
            </span>
          </button>
          <div className='collapse navbar-collapse' id='gameplusNavbar'>
            <div className='navbar-nav ms-auto d-flex flex-flex-sm-column justify-content-center align-items-center '>
              <Link className='nav-item nav-link text-black ' to='/games'>
                Games
              </Link>
              <Link className='nav-item nav-link text-black' to='#'>
                Membership
              </Link>
              <Link className='nav-item nav-link text-black' to='#'>
                Download
              </Link>
              <Link className='nav-item nav-link text-black ' to='#' tabIndex='-1' aria-disabled='true'>
                Blog
              </Link>
              <Link className='nav-item nav-link text-black ' to='#' tabIndex='-1' aria-disabled='true'>
                Support
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
