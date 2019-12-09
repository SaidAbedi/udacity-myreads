import React, { Component } from "react";
import CurrentlyReading from "../shelves/CurrentlyReading";
import Read from "../shelves/Read";
import WantToRead from "../shelves/WantToRead";
import { getAll } from "../BookAPI";
import "./bookShelf.scss";
import { Link } from "react-router-dom";

class BookShelf extends Component {
  state = {
    currentlyReadingBooks: [],
    readBooks: [],
    wantToReadBooks: [],
    readyToShow: false,
    showError: false
  };
  componentDidMount() {
    getAll()
      .then(({ currentlyReadingBooks, wantToReadBooks, readBooks }) => {
        this.setState({
          currentlyReadingBooks,
          wantToReadBooks,
          readBooks
        });
      })
      .catch(() => this.setState({ showError: true }));
  }
  updateBookShelves = () => {
    getAll().then(({ currentlyReadingBooks, wantToReadBooks, readBooks }) => {
      this.setState({
        currentlyReadingBooks,
        wantToReadBooks,
        readBooks
      });
    });
  };

  render() {
    if (this.state.showError) {
      return <ErrorState />;
    }

    return (
      <div>
        <div className="home-heading">
          <h1> My Reads </h1>
        </div>
        <CurrentlyReading
          books={this.state.currentlyReadingBooks}
          updateBookShelves={this.updateBookShelves}
        />
        <Read books={this.state.readBooks} />
        <WantToRead books={this.state.wantToReadBooks} />
        <Link to="/search">
          <div className="open-search">
            <button>+</button>
          </div>
        </Link>
      </div>
    );
  }
}
export default BookShelf;
