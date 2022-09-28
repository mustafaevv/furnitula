import React from "react";

import Container from "../../layout/Container";
import links from "../../router";

import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes["header"]}>
      <Container className={classes["header__container"]}>
        <a className={classes["header__logo"]} href="/">
          furnitula
        </a>
        <ul className={classes["header__list"]}>
          {links.map((link, i) => (
            <li key={i}>
              <a className={classes["header__link"]} href={link.link}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </header>
  );
};

export default Header;
