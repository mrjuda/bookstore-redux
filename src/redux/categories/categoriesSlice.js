// categoriesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'books',
  initialState: '',
  reducers: {
    checkStatus(state) {
      state = 'Work in progress';
    },
  },
});

export default categoriesSlice;
