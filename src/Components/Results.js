import React, { Component } from "react";

class Results extends Component {
  render() {
    if (this.props.results.length > 0) {
      let resultsArray = this.props.results;
      let resultsToRender = resultsArray.map((result, index) => {
        return (
          <div key={index}>
            <p>{result.url}</p>
            <img src={result.images.fixed_height.url} alt="giph" />
          </div>
        );
      });
      
      return <div>{resultsToRender}</div>;
    } else { return <p>What would you like to see?</p>}
  }
}

export default Results;
