import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <form onSubmit={this.props.query}>
              <input
                type="text"
                ref="search"
                placeholder="Search for a gif..."
                className="form-control"
              />
              <input type="submit" value="Search!" className="btn btn-primary mt-4"/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
