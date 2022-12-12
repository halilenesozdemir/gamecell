import React from 'react';
import './Header.css';
import Button from '../Button/Button';

function Header() {
  return (
    <>
      <div className='container'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <a className='navbar-brand' href='#'>
            <img
              className='logo-img'
              src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/05D02D0F-C436-4842-9A6E-56C4D0D077D8.png'
              alt=''
            />
          </a>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup'>
            <span className='navbar-toggler-icon'>
              <img
                src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/10D39C65-7309-4B26-A9CD-F37EC7EA5FE2.svg'
                alt=''
              />
            </span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav'>
              <a className='nav-item nav-link ' href='#'>
                Games
              </a>
              <a className='nav-item nav-link' href='#'>
                Membership
              </a>
              <a className='nav-item nav-link' href='#'>
                Download
              </a>
              <a className='nav-item nav-link ' href='#' tabIndex='-1' aria-disabled='true'>
                Blog
              </a>
              <a className='nav-item nav-link ' href='#' tabIndex='-1' aria-disabled='true'>
                Support
              </a>
              <Button>Success Button</Button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;

/* 

            <img
              className='logo-img'
              src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/05D02D0F-C436-4842-9A6E-56C4D0D077D8.png'
              alt=''
            />
            <img
              src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/10D39C65-7309-4B26-A9CD-F37EC7EA5FE2.svg'
              alt=''
            />
*/
