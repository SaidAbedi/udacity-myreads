import React from "react";
import "./App.css";
import BookShelf from "./BookShelf";
import SearchBooks from "./SearchBooks";

function App() {
  return (
    <div className="App">
      <SearchBooks />
      <BookShelf />
    </div>
  );
}

export default App;
