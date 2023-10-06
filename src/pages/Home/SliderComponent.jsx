

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper';

const sliders = [
    "https://allea.org/wp-content/uploads/2021/09/Open-Science.png",
    "https://cdn.dribbble.com/userupload/3918514/file/original-d1386f0b56b19768259d72a271f74142.png?resize=1200x900&vertical=center",
    "https://wowslider.com/sliders/demo-27/data1/images/rocketlaunch67643.jpg",
    "https://cdn.dribbble.com/userupload/3918511/file/original-ae780342783bf7c2f78aa2c63982be88.png?resize=1200x900&vertical=center",
]
export const SliderComponent = () => (
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
    >
        {
            sliders.map((slider, index) =>

                <SwiperSlide key={index}><img className='w-full h-[600px] rounded-mds' src={slider}></img></SwiperSlide>
            )
        }

    </Swiper>
)

// ReactDOM.render(<SliderComponent/>, document.getElementById('root'))

