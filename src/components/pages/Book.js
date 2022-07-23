// Book.js

import React from 'react';
// import '../styles/Book.css';

const Book = () => (
  <div className="book-div">
    <li className="book">
      <span className="title">The Lord of The Rings (JRR Tolkien)</span>
      <button type="button">Delete</button>
    </li>
    <li className="book">
      <span className="title">O Auto da Compadecida (Ariano Suassuna)</span>
      <button type="button">Delete</button>
    </li>
    <li className="book">
      <span className="title">Mininos Sabidos (J. Teixeira)</span>
      <button type="button">Delete</button>
    </li>
    <li className="book">
      <span className="title">Crime and Punishment (Fiodor Dostoyevsky)</span>
      <button type="button">Delete</button>
    </li>
  </div>
);

export default Book;
