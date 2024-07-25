import React from "react";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Carousel from "../Carousel";
import Slider from "../Slider";

export default function Home() {
    const [ref, inView] = useInView({ triggerOnce: true });
    return (
        <>
            <div className="bg-base h-screen flex flex-col lg:flex-row items-center lg:justify-between px-8 lg:p-24">
                <div className="w-full lg:w-1/2">
                    <h1 className="text-primary text-3xl lg:text-5xl leading-relaxed lg:leading-relaxed 2xl:leading-relaxed mt-24 lg:mt-0">
                        Somos un <strong>mayorista</strong> de <strong>autopartes</strong> orientados a <strong>casas de repuestos automotor, agro e industria</strong>
                    </h1>
                </div>
                <div className="mt-8 lg:mt-0 lg:w-1/2">
                    <Slider />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center p-8 lg:p-24">
                <span className="w-full flex items-center justify-center my-3">
                    <h2 className="text-primary text-xl lg:text-5xl leading-relaxed 2xl:leading-relaxed lg:leading-relaxed lg:text-center lg:px-16">
                        Nos enfocamos fuertemente en el <strong>servicio</strong>, <strong>calidad</strong> y <strong>disponibilidad</strong> de nuestros productos y en la continua <strong>innovación</strong>.
                    </h2>
                </span>
                <div className="bg-secondary w-full lg:w-10/12 rounded-xl flex flex-col lg:flex-row p-8 lg:p-16 gap-8 lg:gap-16 2xl:gap-48 justify-center my-8 lg:my-16">
                    <div className="flex flex-col items-center" ref={ref}>
                        {inView && (
                            <>
                                <span className="text-3xl xl:text-6xl font-extrabold text-white">
                                    <CountUp end={40} duration={2} prefix="+" />
                                </span>
                                <span className="text-white mt-2 text-lg lg:text-xl">Años de experiencia</span>
                            </>
                        )}
                    </div>
                    <div className="flex flex-col items-center">
                        {inView && (
                            <>
                                <span className="text-3xl xl:text-6xl font-extrabold text-white">
                                    <CountUp end={400} duration={2} prefix="+" />
                                </span>
                                <span className="text-white mt-2 text-lg lg:text-xl text-center">Pedidos entregados <br />cada día</span>
                            </>
                        )}
                    </div>
                    <div className="flex flex-col items-center">
                        {inView && (
                            <>
                                <span className="text-3xl xl:text-6xl font-extrabold text-white">
                                    <CountUp end={4000} duration={2} prefix="+" />
                                </span>
                                <span className="text-white mt-2 text-lg lg:text-xl">Localidades alcanzadas</span>
                            </>
                        )}
                    </div>
                </div>
                {/* <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 m-8 lg:m-24 items-center">
                    <div>
                        <img src={pico} />
                    </div>
                    <div>
                        <img src={mdp} />
                    </div>
                </div> */}
                {/*                 
                <h3 className="text-center font-extrabold text-gray-300 text-3xl lg:text-5xl 2xl:text-6xl py-8">NUESTROS PRODUCTOS</h3>
                <Carousel /> */}
            </div>
        </>
    );
}
