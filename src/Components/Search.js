import React, { Component } from "react";

class Search extends Component {

  render() {
    return (
      <div>
        <form onSubmit={this.props.query}>
          <input type="text" ref="search" placeholder="Search for a gif..." />
          <input type="submit" value="Search!" />
        </form>
      </div>
    );
  }
}

export default Search;
