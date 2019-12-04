import React from "react";
import "./bookPreview.scss";

const BookPreview = props => {
  console.log(props);
  const {
    title,
    authors,
    imageLinks: { thumbnail }
  } = props.book;
  return (
    <div>
      <img src={thumbnail} alt="book preview" />
      <h4>{title}</h4>
      <h6>{authors}</h6>
    </div>
  );
};

export default BookPreview;
