// BooksList.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from './booksSlice';

export const BooksList = () => {
  const dispatch = useDispatch();

  const onRemoveBookClicked = (id) => {
    dispatch(deleteBook(id));
  };
  const books = useSelector((state) => state.books.value);

  return (
    <section className="WebPage">
      <ul className="book-container">
        {books.map((book) => (
          <li className="book" key={book.id}>
            <div className="book-data">
              <h3>{book.title}</h3>
              <p className="book-author">{book.author.substring(0, 100)}</p>
            </div>
            <button
              type="button"
              id={book.id}
              onClick={() => { onRemoveBookClicked(book.id); }}
            >
              remove
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BooksList;
