import React, { Component } from "react";
import "../Styles/Results.css";

class Results extends Component {
  render() {
    if (this.props.results.length > 0) {
      let resultsArray = this.props.results;
      let resultsToRender = resultsArray.map((result, index) => {
        return (
          <div className="col-md-4 text-center mt-4 mb-3 result" key={index}>
            <p className="results-p">
              <a href={`${result.url}`} className="url">
                View it here!
              </a>
            </p>
            <img src={result.images.fixed_height.url} alt="giph" />
          </div>
        );
      });

      return (
        <div className="container">
          <div className="row">{resultsToRender}</div>
        </div>
      );
    } else {
      return <p className="default">What would you like to see? :D</p>;
    }
  }
}

export default Results;
