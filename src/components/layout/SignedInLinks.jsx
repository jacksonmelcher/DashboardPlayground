import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks= () => {
  return (
    <ul className="right">
      <li><NavLink to='/'>Dashboard</NavLink></li>
      <li><NavLink to='/create'>Create Task</NavLink></li>
      <li><NavLink to='/'>Logout</NavLink></li>
      <li><NavLink to='/'className="btn btn-floating teal lighten-5 black-text">JM</NavLink></li>
    </ul>
  )
}

export default SignedInLinks;
