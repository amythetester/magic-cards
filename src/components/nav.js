import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar sticky-top navbar-light bg-light">
      <Link to="/" className="navbar-brand">Magical Creatures</Link>
      <Link to={goToTop}>Back to Top</Link>
    </nav>
  );
}

function goToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

export default Nav;
