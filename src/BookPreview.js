import React, { Component } from "react";
import "./bookPreview.scss";
import SelectShelfMenu from "./SelectShelfMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

class BookPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showButton: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    this.setState({ showButton: !this.state.showButton });
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
              <SelectShelfMenu
                id={id}
                shelf={shelf}
                updateBookShelves={this.props.updateBookShelves}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default BookPreview;
