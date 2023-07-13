import React from "react";
import { Zoom, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Carrousel = () => {
  return (
    <>
      <Swiper
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Navigation, Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <div className='swiper-zoom-container'>
            <Image
              src='/images/jon-tyson-gnFiwlyBH-A-unsplash 1.png'
              alt='Next.js Logo'
              layout='responsive'
              width={640}
              height={800}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiper-zoom-container'>
            <Image
              src='/images/jon-tyson-gnFiwlyBH-A-unsplash 1.png'
              alt='Next.js Logo'
              layout='responsive'
              width={640}
              height={800}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiper-zoom-container'>
            <Image
              src='/images/jon-tyson-gnFiwlyBH-A-unsplash 1.png'
              alt='Next.js Logo'
              layout='responsive'
              width={640}
              height={800}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
