// booksSlice.js

import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: [
    { id: '1', title: 'O Auto da Compadecida', author: 'Ariano Suassuna' },
    { id: '2', title: 'Crime and Punishment', author: 'Fiodor Dostoyevsky' },
    { id: '3', title: 'Mininos Sabidos', author: 'Judá Teixeira' },
  ],
  reducers: {
    bookAdded(state, action) {
      state.push(action.payload);
    },
    bookRemoved(state, action) {
      const index = state.findIndex((book) => book.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { bookAdded, bookRemoved } = booksSlice.actions;

export default booksSlice.reducer;
