// BooksList.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from './booksSlice';
import './styles/BooksList.css';

export const BooksList = () => {
  const dispatch = useDispatch();

  const onRemoveBookClicked = (id) => {
    dispatch(deleteBook(id));
  };
  const books = useSelector((state) => state.books.value);
  
  return (
    <section className="WebPage">
      <ul className="book-container">
        {/* {renderedBooks} */}
        {books.map((book) => (
          <li className="book" key={book.id}>
            <div>
              <span>{book.title}</span>
              <span> - </span>
              <span className="book-author">{book.author.substring(0, 100)}</span>
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
