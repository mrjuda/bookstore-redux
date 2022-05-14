// postsSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {id: '1', title: 'First Post!', content: 'Siiiiii!' },
  {id: '2', title: 'Second Post!', content: 'Recebaaa!' },
];
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
});

export default postsSlice.reducer;
