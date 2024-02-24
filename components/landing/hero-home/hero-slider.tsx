import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

export const HeroSlider = ({ imageList }) => {
    // console.log(imageList);


    return (
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
            {imageList?.map((image, index) => (
                <SwiperSlide key={index}>
                    <img
                        src={`${image}`}
                        alt={`Slide ${index + 1}`}
                        className="home__slider-img home__slider-mask"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};