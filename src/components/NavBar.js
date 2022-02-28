import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navigation.scss';

const NavBar = () => {
  const activeStyle = {
    textDecoration: 'underline',
  };

  return (
    <>
      <nav>
        <h1>Space travelers&apos; hub</h1>
        <ul>
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
