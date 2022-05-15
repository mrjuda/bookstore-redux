// booksSlice.js

import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';

const booksUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const unqApiId = '2YsQBoyJACtUVArcysuh/books/';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(`${booksUrl}${unqApiId}`);
    const data = await response.data;
    const books = [];
    Object.entries(data).forEach((book) => {
      const bookObj = Object.assign({ id: book[0] }, ...book[1]);
      books.push(bookObj);
    });
    return books;
  } catch (error) {
    return error.message;
  }
});

export const addNewBook = createAsyncThunk('books/addNewBook', async ({ title, author }) => {
  const response = await axios.post(`${booksUrl}${unqApiId}`, {
    item_id: nanoid(),
    title,
    author,
    category: 'not yet',
  });
  return response.data;
});

export const deleteBook = createAsyncThunk('books/deleteBook', async ({ id }) => {
  await axios
    .delete(`${booksUrl}${unqApiId}${id}`)
    .catch((error) => console.log(error));
  return { id };
});

export const booksSlice = createSlice({
  name: 'book',
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.value = state.value.concat(action.payload);
      })
      .addCase(addNewBook.fulfilled, (state, action) => {
        state.value.push({
          id: action.meta.requestId,
          title: action.meta.arg.title,
          author: action.meta.arg.author,
          category: 'not yet',
        });
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        const index = state.value.findIndex(({ id }) => id === action.payload.id);
        state.value.splice(index, 1);
      });
  },
});

export const { bookAdded, bookRemoved } = booksSlice.actions;

export default booksSlice.reducer;
