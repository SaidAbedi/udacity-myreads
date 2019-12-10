import React, { Component } from "react";
import CurrentlyReading from "../shelves/CurrentlyReading";
import Read from "../shelves/Read";
import WantToRead from "../shelves/WantToRead";
import { getAll, update, sortAll } from "../BookAPI";
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

  updateBook = (book, shelf) => {
    update(book, shelf);
    getAll()
      .then(({ currentlyReadingBooks, wantToReadBooks, readBooks }) => {
        this.setState({
          currentlyReadingBooks,
          wantToReadBooks,
          readBooks
        });
      })
      .catch(() => this.setState({ showError: true }));
    // sortAll(results);
  };

  render() {
    if (this.state.showError) {
      console.log("error");
      // return <ErrorState />;
    }

    return (
      <div>
        <div className="home-heading">
          <h1> My Reads </h1>
        </div>
        <CurrentlyReading
          books={this.state.currentlyReadingBooks}
          updateBook={this.updateBook}
        />
        <Read books={this.state.readBooks} updateBook={this.updateBook} />
        <WantToRead
          books={this.state.wantToReadBooks}
          updateBook={this.updateBook}
        />
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
