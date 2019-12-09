import React from "react";
import BookShelf from "./components/BookShelf";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchBooks from "./components/SearchBooks";
import TestComponent from "./components/TestComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={BookShelf} />
          <Route exact path="/search" component={SearchBooks} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
