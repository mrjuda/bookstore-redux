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
    <form className="add-book-container">
      <input
        type="text"
        className="add-book-text"
        placeholder="Add a Title"
        id="bookTitle"
        name="bookTitle"
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
      <button type="button" onClick={onSaveBookClicked}>
        Add New
      </button>
    </form>
  );
};

export default AddBookForm;
