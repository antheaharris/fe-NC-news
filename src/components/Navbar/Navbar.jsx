import React from "react";
import { Link } from "@reach/router";

const Navbar = () => {
  return (
    <nav className="app-navbar">
      <Link to="/">Home</Link>
      <Link to="/articles">Articles</Link>
    </nav>
  );
};

export default Navbar;
