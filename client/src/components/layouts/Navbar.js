import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/layouts/Navbar.css';

export default function Navbar()  {

    return (
      <nav class = "navbar navbar-dark background" >
        <Link to="/" className="navbar-brand">Chat App</Link>
      </nav>
    );
}