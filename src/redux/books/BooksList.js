// BooksList.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from './booksSlice';
import loading from '../../loading.png';

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
            <div className="c1">
              <div className="book-data">
                <span className="book-category">Science Fiction</span>
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">{book.author.substring(0, 100)}</p>
              </div>
              <div className="btn-array">
                <button
                  type="button"
                >
                  Comments
                </button>
                <span> | </span>
                <button
                  type="button"
                  id={book.id}
                  onClick={() => { onRemoveBookClicked(book.id); }}
                >
                  Remove
                </button>
                <span> | </span>
                <button
                  type="button"
                >
                  Edit
                </button>
              </div>
            </div>
            <div className="c2">
              <img src={loading} alt="loading" />
            </div>
            <span className="v-splitter">|</span>
            <div className="c3">
              <span>CURRENT CHAPTER</span>
              <h4>Chapter 12</h4>
              <button
                type="button"
                className="btn-up-progress"
              >
                UPDATE PROGRESS
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BooksList;
