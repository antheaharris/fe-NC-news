import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css";

const Header = ({ loggedInUser }) => {
  return (
    <header className={styles.container}>
      <h1 className={styles.item_a}>NC Newsbeat</h1>
      <Navbar className={styles.item_b} />
      <h5>logged in as {loggedInUser}</h5>
    </header>
  );
};

export default Header;
