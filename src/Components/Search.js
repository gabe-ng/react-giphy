import React, { Component } from "react";

class Search extends Component {
  state = {
    query: ""
  };

  setQuery = (e) => {
      if (e) e.preventDefault();
      this.setState({
          query: this.refs.search.value
      })
      console.log(this.state.query);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.setQuery}>
          <input type="text" ref="search" placeholder="Search for a gif..." />
          <input type="submit" value="Search!" />
        </form>
      </div>
    );
  }
}

export default Search;
