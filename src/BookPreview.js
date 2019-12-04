import React from "react";
import "./bookPreview.scss";
// import AddBookToShelfButton from "./AddBookToShelfButton";
import SelectShelfMenu from "./SelectShelfMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

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
      <h4>{title}</h4>
      <h6>{authors}</h6>
      <button onClick={() => console.log("button clicked")}>
        <FontAwesomeIcon icon={faPlusCircle} className="add-icon" />
      </button>
      <SelectShelfMenu id={id} />
    </div>
  );
};

export default BookPreview;
