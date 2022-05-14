// AddBookForm.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
// import '../../index.css';
import './styles/AddBookForm.css';

import { bookAdded } from './booksSlice';

export const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onAuthorChanged =(e) => setAuthor(e.target.value);

  const onSavePostClicked = () => {
    if (title && author) {
      dispatch(
        bookAdded({
          id: nanoid(),
          title,
          author,
        })
      );

      setTitle('');
      setAuthor('');
    }
  }

  return (
    <section>
      <form>
        <input
          type="text"
          className="add-book-text"
          placeholder="Add a Title"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <input
          type="text"
          className="add-book-text"
          placeholder="Add an Author"
          id="bookAuthor"
          name="bookAuthor"
          value={author}
          onChange={onAuthorChanged}
        />
        <button type="button" onClick={onSavePostClicked}>
            Add book
        </button>
      </form>
    </section>
  );
};
