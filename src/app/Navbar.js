import React from 'react';
import '../components/pages/WebHeader';
import '../index.css';

export const Navbar = () => (
  <div className="WebHeader">
    <h1 className="HeaderTitle">
      Bookstore CMS
    </h1>
    <ul className="HeaderMenu">
      <li className="MenuItem"><a href="/">BOOKS</a></li>
      <li className="MenuItem"><a href="/WebCategories">CATEGORIES</a></li>
    </ul>
  </div>
);

export default Navbar;
