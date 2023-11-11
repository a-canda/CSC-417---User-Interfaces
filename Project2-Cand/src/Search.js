import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(event) {
    const term = event.target.value;
    this.setState({ searchTerm: term }, () => {
      this.props.onSearchChange(this.state.searchTerm);
    });
  }

  render() {
    return (
      <form className="bg-primary text-white text-center p-4 m-4">
        <p style={{ fontSize: '24px' }}>Enter a Letter Grade: 
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleSearchChange}
          placeholder="Enter A-D or all"
        />
        </p>
      </form>
    );
  }
}

export default Search;