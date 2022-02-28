import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navigation.scss';

const NavBar = () => {
  const activeStyle = {
    textDecoration: 'underline',
  };

  return (
    <>
      <nav className="nav nav-parent">
        <h1>Space travelers&apos; hub</h1>
        <ul className="nav nav-child">
          <li>
            <NavLink
              to="/"
              className="nav-link"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              end
            >
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/missions"
              className="nav-link"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              end
            >
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink
              id="profile"
              to="/profile"
              className="nav-link"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              end
            >
              My profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
