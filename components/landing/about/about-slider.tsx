import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import { ThumbnailSlider } from "./thumbnail-slider";

export const AboutSlider = ({ imageList, thumbsSwiper }) => {
    return (
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
            {imageList?.map((image, index) => (
                <SwiperSlide key={index}>
                    <img
                        src={`md_assets/doantruong/about/${index + 1}.jpg`}
                        alt={`Slide ${index + 1}`}
                        className="about__bg"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};