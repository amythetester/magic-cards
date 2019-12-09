import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar sticky-top navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">Magical Creatures</Link>
      <Link to={goToTop} className="btn btn-outline-light">Back to Top</Link>
    </nav>
  );
}

function goToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

export default Nav;
