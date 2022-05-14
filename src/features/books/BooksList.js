// BooksList.js

import React from "react";
import { useSelector } from "react-redux";

export const BooksList = () => {
  const books = useSelector(state => state.books);

  const renderedBooks = books.map(book => (
    <article className="book" key={book.id}>
      <h3>{book.title}</h3>
      <p className="book-author">{book.author.substring(0, 100)}</p>
    </article>
  ))

  return (
    <section className="book-container">
      <h2>Books</h2>
      {renderedBooks}
    </section>
  );
};