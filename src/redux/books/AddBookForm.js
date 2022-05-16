// AddBookForm.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import '../../index.css';

import { addNewBook } from './booksSlice';

export const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onAuthorChanged = (e) => setAuthor(e.target.value);

  const canSave = [title, author].every(Boolean);

  const onSaveBookClicked = () => {
    if (canSave) {
      try {
        dispatch(
          addNewBook({
            id: nanoid(),
            title,
            author,
          }),
        );
        setTitle('');
        setAuthor('');
      } catch (error) {
        console.error('Error adding book', error);
      }
    }
  };

  return (
    <div className="add-book-container">
      <span className="splitter" />
      <h2>ADD NEW BOOK</h2>
      <form className="add-book-form">
        <input
          type="text"
          className="add-title"
          placeholder="Add a Title"
          id="bookTitle"
          name="bookTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <input
          type="text"
          className="add-author"
          placeholder="Add an Author"
          id="bookAuthor"
          name="bookAuthor"
          value={author}
          onChange={onAuthorChanged}
        />
        <button type="button" onClick={onSaveBookClicked}>
          ADD NEW
        </button>
      </form>
    </div>
  );
};

export default AddBookForm;
