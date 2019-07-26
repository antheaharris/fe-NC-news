import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css";

const Header = ({ loggedInUser }) => {
  return (
    <header className={styles.flex_container}>
      <section className={styles.flex_title}>
        <h1>NC Newsbeat</h1>
      </section>

      <section className={styles.flex_navbar}>
        <Navbar />
      </section>

      <section className={styles.flex_user}>
        <h5>logged in as {loggedInUser}</h5>
      </section>
    </header>
  );
};

export default Header;
