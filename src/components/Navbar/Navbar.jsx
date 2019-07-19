import React from "react";
import { Link } from "@reach/router";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Link to="/" className={styles.home}>
        Home
      </Link>
      <Link to="/articles" className={styles.articles}>
        Articles
      </Link>
    </nav>
  );
};

export default Navbar;
