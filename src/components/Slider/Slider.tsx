// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import  Car_freight from "images/Car_freight.png"
import  air_freight from "images/air_freight.jpg"
import  Sea_freight  from "images/Sea_freight.jpg"


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./Slider.scss"

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="slider"
    >
        <SwiperSlide></SwiperSlide>
      <SwiperSlide>
        <img src={Car_freight} alt="" />
      </SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide><img src={air_freight} alt="" /></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide><img src={Sea_freight} alt="" /></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      ...
    </Swiper>
  );
};