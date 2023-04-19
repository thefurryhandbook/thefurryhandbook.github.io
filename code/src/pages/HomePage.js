import React from 'react';
import './HomePage.css';

function HomePage() {
  const articleLinks = [
    { path: "/intro-to-the-furry-fandom", name: "Intro To The Furry Fandom" },
  ];

  const fursuitLinks = [
    { path: "/commissioning-your-first-fursuit", name: "Commissioning Your First Fursuit" },
  ];

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to The Furry Handbook!</p>
      <p>This is a very early stage project. There isn't much to see, but this is a living work in progress you can check on at anytime.</p>
      <div class="homepage-articles">
        <h2>Furry 101</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {articleLinks.map((link) => (
            <li key={link.path}>
                <a href={link.path}>
                {link.name}
                </a>
            </li>
            ))}
        </ul>
        <h2>Fursuit Tips</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {fursuitLinks.map((link) => (
            <li key={link.path}>
                <a href={link.path}>
                {link.name}
                </a>
            </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;