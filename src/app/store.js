import { configureStore } from '@reduxjs/toolkit'
import booksReducer from '../features/posts/booksSlice';

export default configureStore({
  reducer: {
    books: booksReducer,
  },
});
