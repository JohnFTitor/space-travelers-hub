import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <>
    <nav>
      <h1>Space travelers&apos; hub</h1>
      <ul>
        <li>
          <NavLink to="/">Rockets</NavLink>
        </li>
        <li>
          <NavLink to="missions">Missions</NavLink>
        </li>
        <li>
          <NavLink to="profile">My profile</NavLink>
        </li>
      </ul>
    </nav>
  </>
);

export default NavBar;
