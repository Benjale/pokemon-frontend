import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-center">
      <a className="navbar-brand d-flex align-items-center" href="/">
        <img
          src="pokemon_logo.svg"
          alt="Pokemon Logo"
          width="100"
          height="80"
          className="d-inline-block align-top"
        />
        <span className="navbar-text ms-2 fw-bold">Pokemon Web</span>
      </a>
    </nav>
  );
};

export default Navbar;
