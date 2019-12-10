import React from "react";
import BookPreview from "../components/BookPreview";

const CurrentlyReading = props => {
  return (
    <div>
      <h1>Currently Reading Props</h1>
      <div className="shelf">
        {props.books.length > 0 ? (
          props.books.map(book => {
            return (
              <BookPreview
                book={book}
                key={book.id}
                updateBook={props.updateBook}
              />
            );
          })
        ) : (
          <div>
            <h2>No books on the Currently Reading Shelf</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrentlyReading;
