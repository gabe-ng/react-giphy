import React, { Component } from "react";
import axios from 'axios';

import Search from "../Components/Search";
import Results from "../Components/Results";

class SearchContainer extends Component {
    state = {
        query: "",
        submittedSearch: false,
        results: []
    };

    componentDidMount () {
        if (this.state.sumbittedSearch === true) {
            let giphyURL = "https://api.giphy.com/v1/gifs/search?q=";
            let key = "&api_key=WCnuBT9NArhysF9D2w7yN7wK4AOmFgMz";
            let url = `${giphyURL}${this.state.query}${key}`;
            axios.get(url)
                .then(response => {
                    this.setState({
                        results: response.data
                    })
                })
        }
    }

    setQuery = (e) => {
        if (e) e.preventDefault();
        this.setState({
            query: this.refs.child.refs.search.value,
            submittedSearch: true
        })
    }

    render () {
        return (
            <div>
                <Search ref="child" query={this.setQuery}/>
                <Results results={this.state.results} />
            </div>
        )   
    }
}

export default SearchContainer;
