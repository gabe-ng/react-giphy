import React, { Component } from "react";
import axios from "axios";

import Search from "../Components/Search";
import Results from "../Components/Results";

class SearchContainer extends Component {
  state = {
    query: "",
    submittedSearch: false,
    results: [],
  };

  componentDidUpdate() {
    console.log("in compo did update");
    if (this.state.submittedSearch === true) {
      console.log("in compononent did update, true");

      let giphyURL = "https://api.giphy.com/v1/gifs/search?q=";
      let url = `${giphyURL}${
        this.state.query
      }&api_key=WCnuBT9NArhysF9D2w7yN7wK4AOmFgMz`;
      axios
        .get(url)
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
      query: this.refs.searchChild.refs.search.value,
      submittedSearch: true
    });
    console.log("updated state query and bool");
  };


  render() {
    console.log(this.state);

      let jumboStyle = {minHeight: '100%',  
      minHeight: "50vh",
      display: "flex",
      textAlign: 'center',
      alignItems: "center"
    }

    return (
      <div>
        <div className="jumbotron" style={jumboStyle}> 
          <div className="container">
            <h1 className="display-4">Let's search for Giphs!</h1>
          </div>
        </div>
        <Search ref="searchChild" query={this.setQuery} />
        <Results ref="responseChild" results={this.state.results} />
      </div>
    );
  }
}

export default SearchContainer;
