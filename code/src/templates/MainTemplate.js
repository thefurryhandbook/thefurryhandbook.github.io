import React from 'react';
import { NavLink } from 'react-router-dom';

const MainTemplate = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '20%', height: '100vh', backgroundColor: '#f0f0f0', padding: '20px' }}>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>
              <NavLink to="/" exact activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div style={{ width: '80%', backgroundColor: '#ffffff', padding: '20px' }}>
        {children}
      </div>
    </div>
  );
}

export default MainTemplate;