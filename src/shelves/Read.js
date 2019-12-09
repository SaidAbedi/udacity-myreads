import React from "react";
import BookPreview from "../components/BookPreview";

const Read = props => {
  return (
    <div>
      <h1>Read Books</h1>
      <div className="shelf">
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
    </div>
  );
};

export default Read;
