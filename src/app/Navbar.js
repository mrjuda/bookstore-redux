import React from 'react';
import '../components/pages/WebHeader';
import '../index.css';

export const Navbar = () => (
  <div className="WebHeader">
    <h1 className="HeaderTitle">
      Bookstore CMS
    </h1>
    <ul className="HeaderMenu">
      <li><a href="/">Books</a></li>
      <li><a href="/WebCategories">Categories</a></li>
    </ul>
  </div>
);

export default Navbar;
