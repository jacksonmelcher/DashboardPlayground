import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const NavBar = () => {
  return (
    <nav className="nav-wrapper blue-grey darken-4">
      <div className="container">
        <a href="/" class="brand-logo"><i class="large material-icons">people_outline</i>Alchemy Connect</a>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  )
}

export default NavBar;
