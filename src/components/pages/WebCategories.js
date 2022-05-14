// WebCategories.js

import React from 'react';
import '../styles/WebCategories.css';

function WebCategories() {
  return (
    <div className="cat-container">
      <button type="button" value="CheckStatus" className="check-status">Check Status</button>
      <span className="quote">
        If you only read the books that everyone else is reading,
        you can only think what everyone else is thinking.
        ― Haruki Murakami
      </span>
    </div>
  );
}

export default WebCategories;
