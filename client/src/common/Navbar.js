import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

function Navbar(props) {
  return (
    <div className='navbar-container'>
      <div className='navbar'>
        <Link to='/' className='navbar-link'><h1 className='navbar__header'>ISOCHRONE-MAPPER</h1></Link>
        <ul className='navbar__list'>
          <Link to='/help' className='navbar-link'><li className='navbar__list__item navbar__list__help'>Help</li></Link>
          <Link to='/signon' className='navbar-link'><li className='navbar__list__item navbar__list__signon'>Sign On</li></Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;