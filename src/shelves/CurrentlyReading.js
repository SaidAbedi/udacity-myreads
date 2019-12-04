import React from "react";
import BookPreview from "../BookPreview";

const CurrentlyReading = props => {
  return (
    <div className="shelf">
      <h1>Currently Reading Props</h1>

      {props.books.length > 0 ? (
        props.books.map(book => {
          return <BookPreview book={book} key={book.id} />;
        })
      ) : (
        <div>
          <h2>No books on the Currently Reading Shelf</h2>
        </div>
      )}
    </div>
  );
};

export default CurrentlyReading;
