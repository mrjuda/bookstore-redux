// AddBook.js

import React from 'react';
// import '../styles/AddBook.css';

const AddBook = () => (
  <form className="add-book-container">
    <input
      type="text"
      className="add-book-text"
      placeholder="Add a Author"
    />
    <input
      type="text"
      className="add-book-text"
      placeholder="Add a book"
    />
    <button type="submit" className="add-book-submit">
      Submit
    </button>
  </form>
);

export default AddBook;
