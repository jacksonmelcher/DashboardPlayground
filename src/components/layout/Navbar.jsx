import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const NavBar = () => {
  return (
    <nav className="nav-wrapper grey darken-4">
      <div className="container">
        <Link to='/' className="brand-logo">alchemy</Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  )
}

export default NavBar;
