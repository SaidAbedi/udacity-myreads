import React, { Component } from "react";
import "./searchBooks.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import * as BookAPI from "./BookAPI";
import BookPreview from "./BookPreview";

class SearchBooks extends Component {
  state = {
    query: "",
    books: []
  };

  componentDidMount() {
    console.log("mounted");
  }
  componentDidUpdate() {
    console.log("updated");
    BookAPI.search(this.state.query).then(results => {
      this.setState({ books: results });
    });
  }
  handleChange(e) {
    e.preventDefault();
    const query = e.target.value;
    this.setState({ query });
  }

  render() {
    return (
      <div className="search-bar">
        <form>
          <FontAwesomeIcon icon={faSearchPlus} className="icons" />
          <input
            type="text"
            name="query"
            placeholder="Search Title of Book"
            onChange={e => this.handleChange(e)}
          />
        </form>
        {this.state.books.length > 1 ? (
          this.state.books.map(book => <BookPreview book={book} />)
        ) : (
          <div className="no-books-shown">
            <h1>No Books Found</h1>
          </div>
        )}
      </div>
    );
  }
}

export default SearchBooks;
