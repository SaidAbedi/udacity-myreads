import React from "react";
import BookPreview from "../BookPreview";

const Read = props => {
  return (
    <div className="shelf">
      <h1>Read Books</h1>
      {props.books.length > 0 ? (
        props.books.map(book => {
          return <BookPreview book={book} key={book.id} />;
        })
      ) : (
        <div>
          <h2>No books on the Read Shelf</h2>
        </div>
      )}
    </div>
  );
};

export default Read;
