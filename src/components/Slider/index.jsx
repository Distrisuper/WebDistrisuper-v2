import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css'

export default function Slider() {

    const slides = [
        { id: 'slide1', src: '/logosblancos/ag.png' },
        { id: 'slide2', src: '/logosblancos/apex.png' },
        { id: 'slide3', src: '/logosblancos/axios.png' },
        { id: 'slide4', src: '/logosblancos/bator.png' },
        { id: 'slide5', src: '/logosblancos/cesca.png' },
        { id: 'slide6', src: '/logosblancos/champion.png' },
        { id: 'slide7', src: '/logosblancos/clever.png' },
        { id: 'slide8', src: '/logosblancos/cobrec.png' },
        { id: 'slide9', src: '/logosblancos/dauer.png' },
        { id: 'slide10', src: '/logosblancos/enerbat.png' },
        { id: 'slide11', src: '/logosblancos/etma.png' },
        { id: 'slide12', src: '/logosblancos/fric rot.png' },
        { id: 'slide13', src: '/logosblancos/garma.png' },
        { id: 'slide14', src: '/logosblancos/gaspring.png' },
        { id: 'slide15', src: '/logosblancos/griffo.png' },
        { id: 'slide16', src: '/logosblancos/hiterub.png' },
        { id: 'slide17', src: '/logosblancos/jorsa.png' },
        { id: 'slide18', src: '/logosblancos/logo_serma.png' },
        { id: 'slide19', src: '/logosblancos/mon amort.png' },
        { id: 'slide20', src: '/logosblancos/mon matic.png' },
        { id: 'slide21', src: '/logosblancos/mon.png' },
        { id: 'slide22', src: '/logosblancos/moog.png' },
        { id: 'slide23', src: '/logosblancos/mrs.png' },
        { id: 'slide24', src: '/logosblancos/nakata.png' },
        { id: 'slide25', src: '/logosblancos/ostende.png' },
        { id: 'slide26', src: '/logosblancos/rancho.png' },
        { id: 'slide27', src: '/logosblancos/raybestos.png' },
        { id: 'slide28', src: '/logosblancos/rm.png' },
        { id: 'slide29', src: '/logosblancos/serrat.png' },
        { id: 'slide30', src: '/logosblancos/silisol.png' },
        { id: 'slide31', src: '/logosblancos/skf.png' },
        { id: 'slide32', src: '/logosblancos/slime.png' },
        { id: 'slide33', src: '/logosblancos/solmimi.png' },
        { id: 'slide34', src: '/logosblancos/spicer.png' },
        { id: 'slide35', src: '/logosblancos/textar.png' },
        { id: 'slide36', src: '/logosblancos/thomp.png' },
        { id: 'slide37', src: '/logosblancos/under.png' },
        { id: 'slide38', src: '/logosblancos/VALEO.png' },
        { id: 'slide39', src: '/logosblancos/valvoline.png' },
        { id: 'slide40', src: '/logosblancos/vth.png' },
        { id: 'slide41', src: '/logosblancos/wag.png' },
        { id: 'slide42', src: '/logosblancos/wildbrake.png' },
    ];


    return (
        <Swiper
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            loop={true}
            spaceBetween={50}
            slidesPerView={1}
            className="w-full md:w-1/2 h-full flex justify-center items-center"
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