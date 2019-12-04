import React, { Component } from "react";
import "./selectShelf.scss";
import { update } from "./BookAPI";

class SelectShelfMenu extends Component {
  render() {
    const id = this.props;
    return (
      <div className="menu">
        <button onClick={() => console.log(update(id, "currentlyReading"))}>
          Currently reading
        </button>
        <button onClick={() => console.log(update(id, "wantToRead"))}>
          {" "}
          Want to Read{" "}
        </button>
        <button onClick={() => console.log(update(id, "read"))}> Read</button>
      </div>
    );
  }
}

export default SelectShelfMenu;
