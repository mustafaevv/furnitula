import React from "react";

import Container from "../../layout/Container";

import banner from "../../images/banner.png";

import classes from "./Banner.module.scss";

const Banner = () => {
  return (
    <section className={classes["banner"]}>
      <Container className={classes["banner__container"]}>
        <div className={classes["banner__left"]}>
          <h1 className={classes["banner__title"]}>
            Furniture that feels luxury, but affordable
          </h1>
          <p className={classes["banner__text"]}>
            Over 1000 satisfied clients all over the country, our clients trust
            in our quality and we prefer reputation over profits.
          </p>
          <div className={classes["banner__controller"]}>
            <button className={classes["banner__btn"]}>Buy now</button>
            <button className={classes["banner__btn"]}>Explore</button>
          </div>
        </div>
        <div className={classes["banner__right"]}>
          <img className={classes["banner__img"]} src={banner} alt="" />
        </div>
      </Container>
    </section>
  );
};

export default Banner;
