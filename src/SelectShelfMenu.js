import React, { Component } from "react";
import "./selectShelf.scss";

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
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState !== this.state) {
      this.props.updateBookShelves();
    }
  };

  render() {
    const { id, shelf } = this.props;
    return (
      <form className="menu" onSubmit={this.handleSubmit}>
        <select size="4" onChange={e => this.handleChange(e, id)}>
          <option value="">--Please choose an shelf--</option>
          <option
            selected={shelf === "currentlyReading"}
            value="currentlyReading"
          >
            Currently Reading
          </option>
          <option selected={shelf === "wantToRead"} value="wantToRead">
            Want to Read
          </option>
          <option selected={shelf === "read"} value="read">
            Read
          </option>
        </select>
      </form>
    );
  }
}

export default SelectShelfMenu;
