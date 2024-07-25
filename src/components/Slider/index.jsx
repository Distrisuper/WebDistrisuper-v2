import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css'

export default function Slider() {

    const slides = [
        { id: 'slide1', src: '/1.webp' },
        { id: 'slide2', src: '/2.webp' },
        { id: 'slide3', src: '/3.webp' },
        { id: 'slide4', src: '/4.webp' },
        { id: 'slide5', src: '/5.webp' },
        { id: 'slide6', src: '/6.webp' },
    ];

    return (
        <Swiper
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            loop={true}
            spaceBetween={50}
            slidesPerView={1}
            className="w-full h-full flex justify-center items-center"
        >
            {slides.map((slide) => (
                <SwiperSlide
                    key={slide.id}
                    data-slide-id={slide.id}
                    className='flex justify-center items-center w-full h-full'
                >
                    <img
                        src={slide.src}
                        className={`h-auto w-auto object-contain transition-opacity duration-500`}
                        loading="lazy"
                        style={{ objectFit: 'cover', objectPosition: 'center', userSelect: 'none' }}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}