import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainTemplate.css';

const MainTemplate = ({ children }) => {
const navLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact" }
];
  return (
    <div class="template--container">
        <div class="template--row">
            <div class="template--column-left">
                <div class="logo-section"><img src='/logo512.png'/><span>The Furry Handbook</span></div>
                <nav>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {navLinks.map((link) => (
                        <li key={link.path}>
                            <NavLink to={link.path} exact activeClassName="active">
                            {link.name}
                            </NavLink>
                        </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div class="template--column-right">
                {children}
            </div>
        </div>
    </div>
  );
}

export default MainTemplate;