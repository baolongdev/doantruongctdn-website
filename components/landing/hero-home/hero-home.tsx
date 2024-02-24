import React, { useEffect, useState } from "react";
import { HeroContent } from "./hero-content";
import { HeroSlider } from "./hero-slider";
import { SocialLinks } from "./social-links";
export default function HeroHome() {
  const [heroHomeData, setHeroHomeData] = useState({
    imageList: [],
    title: "",
    subtitle: "",
    linkbtn: "",
  });

  async function heroHomeGet() {
    const slug = "hero-home/gioithieu";
    const fields = "title,subtitle,imageList,linkbtn";
    const res = await fetch(`api/file/readfile?slug=${slug}&fields=${fields}`);
    const raws = await res.json();
    setHeroHomeData(raws);
  }

  useEffect(() => {
    heroHomeGet();
  }, []);

  return (
    <section className="home" id="home">
      <div className="home__container container grid">
        <HeroSlider imageList={heroHomeData.imageList} />
        <HeroContent
          title={heroHomeData.title}
          subtitle={heroHomeData.subtitle}
          linkbtn={heroHomeData.linkbtn}
        />
        <SocialLinks />
      </div>
    </section>
  );
}
