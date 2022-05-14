import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { Navbar } from './app/Navbar';
import { BooksList } from './features/books/BooksList';
import { AddBookForm } from './features/books/AddBookForm';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <BooksList />
                <AddBookForm />
              </>
            )}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
