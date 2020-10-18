import React from "react";

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
      <button className="btn btn-success">Add new note</button>
    </nav>
  );
};

export default Navbar;
