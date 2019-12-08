import React from "react";
import "./App.css";
import BookShelf from "./BookShelf";
import { BrowserRouter, Route, Link } from "react-router-dom";
import SearchBooks from "./SearchBooks";

function App({ history }) {
  return (
    <div className="App">
      <BookShelf />
      <BrowserRouter>
        <Route exact path="/search" component={SearchBooks} />
        <Link to="search">To Search</Link>
      </BrowserRouter>
    </div>
  );
}

export default App;
