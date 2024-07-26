import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css'
import peer from '/marcas/PEER.jpg';
import apicer from '/marcas/apicer.png';
import enerbat from '/marcas/ENERBAT.jpg';
import mahle from '/marcas/MAHLE.jpg';
import nakata from '/marcas/nakata.png';
import thompson from '/marcas/thompson.png';
import monroeNegro from '/marcas/monroe negro.png';
import etma from '/marcas/etma.png';
import wag from '/marcas/wag.png';
import champion from '/marcas/champion.png';
import fricRot from '/marcas/fric rot.png';
import monroe from '/marcas/monroe.png';
import raybestos from '/marcas/raybestos.png';
import valeo from '/marcas/valeo.png';
import moog from '/marcas/MOOG.jpg';
import ag from '/marcas/ag.png';
import cobreq from '/marcas/cobreq.png';
import liggett from '/marcas/LIGGETT.jpg';
import mrs from '/marcas/MRS.jpg';
import skf from '/marcas/skf.png';
import wildbrake from '/marcas/wildbrake.png';


export default function Slider() {

    const slides = [
        { id: 'slide2', src: peer },
        { id: 'slide3', src: apicer },
        { id: 'slide4', src: enerbat },
        { id: 'slide5', src: mahle },
        { id: 'slide6', src: nakata },
        { id: 'slide7', src: thompson },
        { id: 'slide8', src: monroeNegro },
        { id: 'slide9', src: etma },
        { id: 'slide10', src: wag },
        { id: 'slide11', src: champion },
        { id: 'slide12', src: fricRot },
        { id: 'slide13', src: monroe },
        { id: 'slide14', src: raybestos },
        { id: 'slide15', src: valeo },
        { id: 'slide16', src: moog },
        { id: 'slide17', src: ag },
        { id: 'slide18', src: cobreq },
        { id: 'slide19', src: liggett },
        { id: 'slide20', src: mrs },
        { id: 'slide21', src: skf },
        { id: 'slide22', src: wildbrake }
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
            className="w-1/2 h-full flex justify-center items-center"
        >
            {slides.map((slide) => (
                <SwiperSlide
                    key={slide.id}
                    data-slide-id={slide.id}
                    className='flex justify-center items-center w-full h-auto'
                >
                    <img
                        src={slide.src}
                        className={` h-auto w-auto object-contain transition-opacity duration-500`}
                        loading="lazy"
                        style={{ objectFit: 'cover', objectPosition: 'center', userSelect: 'none' }}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}