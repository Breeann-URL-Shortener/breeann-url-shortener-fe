import React from 'react';
import NavMenu from '../navmenu/NavMenu';
import bugLogo from '../../assets/minuscurl_logo_bug.png';
import './Header.scss';

function Header() {
  return (
    <div className="Header">
      {/* <img src={bugLogo} alt="bug logo"/> */}
      <NavMenu />
    </div>
  );
}

export default Header;

