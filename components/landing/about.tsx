import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import { convertNewlinesToSpans } from "../utils/convertNewlinesToSpans ";

export default function About() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [doantruongAbout, SetDoantruongAbout] = useState([]);

  async function doantruongGet() {
    const slug = "doantruong/about";
    const fields = "title,subtitle,image";
    const res = await fetch(`api/file/readfile?slug=${slug}&fields=${fields}`);
    const raws = await res.json();
    SetDoantruongAbout(raws);
  }
  useEffect(() => {
    doantruongGet();
  }, []);

  return (
    <section className="about section container" id="about">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        effect={"fade"}
        modules={[EffectFade, Autoplay, Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        className="gallery-top"
      >
        {[...Array(doantruongAbout["image"]?.length)].map((_, i) => (
          <SwiperSlide key={i}>
            <img
              src={`md_assets/doantruong/about/${i + 1}.jpg`}
              alt={`Slide ${i + 1}`}
              className="about__bg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="about__container grid">
        <div className="about__data">
          <h2 className="section__title about__title">
            {convertNewlinesToSpans(doantruongAbout["title"] || "")}
          </h2>

          <p className="about__description">
            {convertNewlinesToSpans(doantruongAbout["subtitle"] || "")}
          </p>
          <a href="/doantruong" className="button button--flex">
            Tìm hiểu thêm{" "}
            <i className="ri-arrow-right-down-line button__icon"></i>
          </a>
        </div>
      </div>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={0}
        slidesPerView={3}
        modules={[Thumbs]}
        className="controls about__controls-target"
      >
        {doantruongAbout["image"]?.map((e: any, index: any) => (
          <SwiperSlide key={index}>
            <img
              src={`md_assets/doantruong/${e}`}
              alt={`Slide ${index + 1}`}
              className="controls__img"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
