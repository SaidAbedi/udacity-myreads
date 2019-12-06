import React, { Component } from "react";
import "./selectShelf.scss";
import { update } from "./BookAPI";

class SelectShelfMenu extends Component {
  state = {
    bookId: "",
    showMenu: false,
    shelfSelection: ""
  };
  handleChange = (e, id) => {
    this.setState({
      shelfSelection: e.target.value,
      bookId: id
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    update(this.state.bookId, this.state.shelfSelection);
  };
  // componentDidUpdate() {
  //   if (this.state.shelfSelection) {
  //     update();
  //   }
  // }

  render() {
    const id = this.props;
    return (
      <div className="menu">
        <form onSubmit={this.handleSubmit}>
          <select className="menu" onChange={e => this.handleChange(e, id)}>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
          </select>
          <button>CHANGE </button>
        </form>
        {/* <button onClick={() => console.log(update(id, "currentlyReading"))}>
          Currently Reading
        </button>
        <button onClick={() => console.log(update(id, "wantToRead"))}>
          {" "}
          Want to Read{" "}
        </button>
        <button onClick={() => console.log(update(id, "read"))}> Read</button> */}
      </div>
    );
  }
}

export default SelectShelfMenu;
