import React from "react";
import "./bookPreview.scss";
// import AddBookToShelfButton from "./AddBookToShelfButton";
import SelectShelfMenu from "./SelectShelfMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const BookPreview = props => {
  const {
    title,
    authors,
    id,
    imageLinks: { thumbnail }
  } = props.book;

  return (
    <div className="single-book-preview" key={id}>
      <img src={thumbnail} alt="book preview" />
      <div className="book-details">
        <h3 className="book-title">{title}</h3>
        <h4>{authors}</h4>
        <FontAwesomeIcon icon={faCaretDown} className="add-icon" />
      </div>
      <SelectShelfMenu id={id} />
    </div>
  );
};

export default BookPreview;
