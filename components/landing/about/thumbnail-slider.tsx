import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";

export const ThumbnailSlider = ({ imageList, setThumbsSwiper }) => {
    return (
        <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={0}
            slidesPerView={3}
            modules={[Thumbs]}
            className="controls about__controls-target"
        >
            {imageList?.map((image, index) => (
                <SwiperSlide key={index}>
                    <img
                        src={`md_assets/doantruong/${image}`}
                        alt={`Slide ${index + 1}`}
                        className="controls__img"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};