import React, { Component } from "react";
import axios from "axios";

import Search from "../Components/Search";
import Results from "../Components/Results";

class SearchContainer extends Component {
  state = {
    query: "",
    submittedSearch: false,
    results: []
  };

  componentDidUpdate() {
    console.log("in compo did update");
    if (this.state.submittedSearch === true) {
    console.log("in compononent did update, true");

    let giphyURL = "https://api.giphy.com/v1/gifs/search?q=";
    let url = `${giphyURL}${
      this.state.query
    }&api_key=WCnuBT9NArhysF9D2w7yN7wK4AOmFgMz`;
    axios.get(url)
      .then(response => {
        console.log(response);
        this.setState({
          results: response.data.data,
          submittedSearch: false
        });
      })
      .catch(error => {
        console.log(error);
      });
    }
  }

  setQuery = e => {
    if (e) e.preventDefault();
    this.setState({
      query: this.refs.child.refs.search.value,
      submittedSearch: true
    });
    console.log("updated state query and bool");
  };

  render() {
    console.log(this.state);

    return (
      <div>
        <Search ref="child" query={this.setQuery} />
        <Results results={this.state.results} />
      </div>
    );
  }
}

export default SearchContainer;
