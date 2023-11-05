import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Swiper.scss";
import { SwiperItem } from "../../types";
import useScreenSize from "../../hooks/useScreenSize";
import Card from "../card/Card";

interface SwiperProps {
  items: SwiperItem[];
}

const MySwiper = ({ items }: SwiperProps) => {
  const screenSize = useScreenSize();

  const getAmountOfSlides = () => {
    if (screenSize.width < 500) return 1;
    else if (screenSize.height > 500 && screenSize.width < 950) return 2;
    else return 3;
  };

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={getAmountOfSlides()}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {items.map((item) => (
        <SwiperSlide>
          <Card item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MySwiper;
