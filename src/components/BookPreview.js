import React, { Component } from "react";
import "./bookPreview.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

class BookPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showButton: false,
      bookId: "",
      showMenu: false,
      shelfSelection: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleClick = () => {
    this.setState({ showButton: !this.state.showButton });
  };
  handleChange = (e, id) => {
    this.setState({
      shelfSelection: e.target.value,
      bookId: id
    });
    this.props.updateBook(this.props.book, e.target.value);
  };
  render() {
    const {
      title,
      authors,
      id,
      shelf,
      imageLinks: { thumbnail }
    } = this.props.book;
    return (
      <div className="single-book-preview" key={id}>
        <img src={thumbnail} alt="book preview" />
        <div className="book-details">
          <h3 className="book-title">{title}</h3>
          <h4>{authors}</h4>
          <div className="book-button-section">
            <FontAwesomeIcon
              icon={faCaretDown}
              onClick={this.handleClick}
              className="add-icon"
            />
            {this.state.showButton && (
              <form className="menu">
                <select size="4" onChange={e => this.handleChange(e, id)}>
                  <option value="">--Choose a shelf--</option>
                  <option
                    selected={shelf === "currentlyReading"}
                    value="currentlyReading"
                  >
                    Currently Reading
                  </option>
                  <option selected={shelf === "wantToRead"} value="wantToRead">
                    Want to Read
                  </option>
                  <option selected={shelf === "read"} value="read">
                    Read
                  </option>
                </select>
              </form>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default BookPreview;
