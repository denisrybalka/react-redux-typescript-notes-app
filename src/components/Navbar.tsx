import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-2">
      <h3 className="text-muted">Notes App</h3>
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
      <Link to="/create-note" className="btn btn-success">
        Add new note
      </Link>
    </nav>
  );
};

export default Navbar;
