import React from "react";
import BookPreview from "../BookPreview";

const WantToRead = props => {
  return (
    <div>
      <h1>Want To Read Books</h1>
      <div className="shelf">
        {props.books.length > 0 ? (
          props.books.map(book => {
            return <BookPreview book={book} key={book.id} />;
          })
        ) : (
          <div>
            <h2>No books on the Want To Read Shelf</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default WantToRead;
