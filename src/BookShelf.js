import React, { Component } from "react";
import CurrentlyReading from "./shelves/CurrentlyReading";
import Read from "./shelves/Read";
import WantToRead from "./shelves/WantToRead";
import { getAll } from "./BookAPI";

class BookShelf extends Component {
  state = {
    books: [],
    currentlyReadingBooks: [],
    readBooks: [],
    wantToReadBooks: [],
    readyToShow: false
  };
  componentDidMount() {
    getAll().then(results => {
      this.setState({
        books: results,
        readyToShow: true
      });
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.books !== prevState.books) {
      const currentlyReadingBooks = this.state.books.filter(
        book => book.shelf === "currentlyReading"
      );
      const wantToReadBooks = this.state.books.filter(
        book => book.shelf === "wantToRead"
      );
      const readBooks = this.state.books.filter(book => book.shelf === "read");
      this.setState(() => {
        return {
          currentlyReadingBooks,
          wantToReadBooks,
          readBooks
        };
      });
    }
  }

  render() {
    return (
      <div>
        <CurrentlyReading books={this.state.currentlyReadingBooks} />
        <Read books={this.state.readBooks} />
        <WantToRead books={this.state.wantToReadBooks} />
      </div>
    );
  }
}
export default BookShelf;
