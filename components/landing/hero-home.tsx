import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import { numberOfPhotos, rootDirectory } from "../../store/hero-home";
import "swiper/css";
import "swiper/css/effect-fade";
import { TabMain } from "../../store/tab-main";
export default function HeroHome() {
  return (
    <section className="home" id="home">
      <div className="home__container container grid">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: true,
          }}
          effect={"fade"}
          modules={[EffectFade, Autoplay]}
          className="home__slider"
        >
          {[...Array(numberOfPhotos)].map((_, i) => (
            <SwiperSlide key={i}>
              <img
                src={`${rootDirectory}/${i + 1}.png`}
                alt={`Slide ${i + 1}`}
                className="home__slider-img home__slider-mask"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="home__data">
          <h1 className="home__title">
            Đoàn Trường THPT chuyên <br /> Trần Đại Nghĩa
          </h1>
          <p className="home__description">
            Lửa Trần Chuyên truyền đi là không bao giờ tắt
          </p>

          {/* <div className="home__details">
                    <p className="home__details-description">
                        Học để biết - Học để làm - Học để tự khẳng định mình - Học để cùng chung sống
                    </p>
                </div> */}
          {/* <a href={TabMain[1].link} className="button button--flex">
            Tiềm hiểu thêm
            <i className="ri-arrow-down-line button__icon"></i>
          </a> */}
        </div>

        <div className="home__social">
          <span className="home__social-follow">Follow Us</span>

          <div className="home__social-links">
            <a
              href="https://www.facebook.com/doantruongtdn"
              target="_blank"
              className="home__social-link"
            >
              <i className="ri-facebook-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
