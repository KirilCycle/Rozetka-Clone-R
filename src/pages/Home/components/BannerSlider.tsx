import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css/pagination";



// import required modules

import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

export default function BannerSlider() {

    return (
        <>
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

                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='slider-img-container-banner'>
                        <Link to="/laptops/11">
                            <img src={'https://i0.wp.com/store.ave.com.bn/wp-content/uploads/2022/07/MacBook_Air_M2_Web_Banner-1400x700-Now-Available.png?fit=1400%2C700&ssl=1'} />
                        </Link>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='slider-img-container-banner'>
                        <Link to="/phone/7">
                            <img src={'https://i0.wp.com/store.ave.com.bn/wp-content/uploads/2022/09/SEA_iPhone_14_Pro_Web_Banner_Pre-avail_1400x700_FFH-1.png?fit=1400%2C700&ssl=1'} />
                        </Link>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='slider-img-container-banner'>
                        <Link to="/phone/9">
                            <img src={'https://i0.wp.com/store.ave.com.bn/wp-content/uploads/2022/09/ROSA_iPhone_14_Web_Banner_Pre-avail_1400x700_FFH-1.png?fit=1400%2C700&ssl=1'} />
                        </Link>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );



}
