import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a className="navbar-brand" href="#">
        GIPHY
      </a>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Search <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
