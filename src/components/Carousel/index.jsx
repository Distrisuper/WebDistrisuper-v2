import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Carousel() {
    const slides = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 }
    ];

    return (
        <div className="container mx-auto py-8">
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={16}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    }
                }}
                className="flex items-center justify-center"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="flex items-center justify-center">
                        <div className="h-64 w-64 lg:h-96 lg:w-96 bg-gray-300 rounded-lg flex items-center justify-center">
                            Slide {slide.id}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
