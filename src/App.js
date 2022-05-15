import React from 'react';
import {
  Navigate,
  Routes,
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { Navbar } from './app/Navbar';
import { BooksList } from './redux/books/BooksList';
import { AddBookForm } from './redux/books/AddBookForm';
import { WebCategories } from './components/pages/WebCategories';

function App() {
  return (
    <div className="container">
    <Router>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element = {(
            <>
              <BooksList />
              <AddBookForm />
            </>
          )}
        />
        {/* <Redirect to="/" /> */}
        <Route path="/WebCategories" element={<WebCategories />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
