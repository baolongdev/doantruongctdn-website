import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { TabMain } from "../../store/tab-main";

import { convertNewlinesToSpans } from "../utils/convertNewlinesToSpans ";
export default function HeroHome() {
  const [heroHomeData, SetHeroHomeData] = useState([]);

  async function heroHomeGet() {
    const slug = "hero-home/gioithieu";
    const fields = "title,subtitle,imageList,linkbtn";
    const res = await fetch(`api/file/readfile?slug=${slug}&fields=${fields}`);
    const raws = await res.json();
    SetHeroHomeData(raws);
  }
  useEffect(() => {
    heroHomeGet();
  }, []);
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
          {heroHomeData["imageList"]?.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={`${image}`}
                alt={`Slide ${index + 1}`}
                className="home__slider-img home__slider-mask"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="home__data">
          <h1 className="home__title">
            {convertNewlinesToSpans(heroHomeData["title"] || "")}
          </h1>
          <p className="home__description">
            {convertNewlinesToSpans(heroHomeData["subtitle"] || "")}
          </p>
          <a href={heroHomeData["linkbtn"]} className="button button--flex">
            Tiềm hiểu thêm
            <i className="ri-arrow-down-line button__icon"></i>
          </a>
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
