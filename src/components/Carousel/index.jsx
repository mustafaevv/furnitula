import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Container from "../../layout/Container";
import sliderItems from "./carouselItems";

import classes from "./Carousel.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "./Carousel.scss";

const Carousel = () => {
  return (
    <section className={classes["slider"]}>
      <Container>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          breakpoints={{
            678: {
              slidesPerView: 1,
            },
            786: {
              slidesPerView: 2,
            },
            1065: {
              slidesPerView: 3,
            },
          }}
          navigation
          spaceBetween={80}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <div className={classes["slider__item"]}>
            {sliderItems.map((item, i) => (
              <SwiperSlide key={i}>
                <div className={classes["slider__inner"]}>
                  <img
                    className={classes["slider__img"]}
                    src={item.img}
                    alt=""
                  />
                  <p className={classes["slider__text"]}>{item.text}</p>
                  <p className={classes["slider__price"]}>$ {item.price}</p>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        <div className={classes["carousel"]}>
          <button className={classes["carousel__button"]}>View more</button>
        </div>
      </Container>
    </section>
  );
};

export default Carousel;
