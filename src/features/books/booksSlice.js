// booksSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {id: '1', title: 'First Post!', author: 'Siiiiii!' },
  {id: '2', title: 'Second Post!', author: 'Recebaaa!' },
];
const booksSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    bookAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const { bookAdded } = booksSlice.actions;

export default booksSlice.reducer;
