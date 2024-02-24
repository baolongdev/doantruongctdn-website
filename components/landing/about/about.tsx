import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import { AboutContent } from "./about-content";
import { AboutSlider } from "./about-slider";
import { ThumbnailSlider } from "./thumbnail-slider";

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
      <AboutSlider
        imageList={doantruongAbout["image"]}
        thumbsSwiper={thumbsSwiper}
      />
      <div className="about__container grid">
        <AboutContent
          title={doantruongAbout["title"]}
          subtitle={doantruongAbout["subtitle"]}
        />
      </div>
      <ThumbnailSlider
        imageList={doantruongAbout["image"]}
        setThumbsSwiper={setThumbsSwiper}
      />
    </section>
  );
}
