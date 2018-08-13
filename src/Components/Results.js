import React, { Component } from "react";

class Results extends Component {

    render() {
        console.log(this.props.results);
        
        let resultsToRender = this.props.results.map(((result, index) => {
            return <div key={index}>
                <p>{result.url}</p>
                <img src={result.images.fixed_height.url} alt="giph" />
              </div>;
        }))
        return (
            <div>
                {resultsToRender}
            </div>
        )
    }
}

export default Results;