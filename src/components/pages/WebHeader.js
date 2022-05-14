// WebHeader.js

import React from 'react';
import '../styles/WebHeader.css';

function WebHeader() {
  return (
    <div className="WebHeader">
      <h1 className="HeaderTitle">
        Bookstore
      </h1>
      <ul>
        <li>|</li>
        <li><a href="/">Books</a></li>
        <li>|</li>
        <li><a href="/WebCategories">Categories</a></li>
        <li>|</li>
      </ul>
    </div>
  );
}

export default WebHeader;
