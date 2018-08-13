import React, { Component } from "react";

import Navbar from './Navbar'
import SearchContainer from '../Containers/SearchContainer';

class Home extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <SearchContainer />
      </div>
    );
  }
}

export default Home;
