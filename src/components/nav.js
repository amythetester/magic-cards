import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="Nav">
      <Link to="/" className="navbar-brand">Magical Creatures</Link>
    </div>
  );
}

export default Nav;
